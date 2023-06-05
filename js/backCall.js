btnAskPhone.forEach(elem => elem.addEventListener('click', getNumber));
function getNumber() {
    popupPhone.classList.add('active');
    bodyLock.classList.add('active');
}

formSentPhone.addEventListener('submit', sendNumberPhone);
function sendNumberPhone(event) {
    event.preventDefault();
    if (validateName() && validatePhone()) {
        let dataForm = {
            'Заказ с сайта:': siteName,
            'Имя:': inputName.value,
            'Телефон:': inputPhone.value
        }
        for (let key in dataForm) {
            phoneNum += `<b>${key}</b> ${dataForm[key]}%0A`;
        }

        fetch(`http://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${phoneNum}`);

        inputName.value = '';
        inputPhone.value = '';
        popupPhone.classList.remove('active');


        onOffSuperBd();
        bodyLock.classList.add('active');
        darkBdSuper.insertAdjacentHTML('afterBegin', '<div id = "message-del">Cообщение отправлено!</div>');

        setTimeout(function () {
            document.querySelector('#message-del').remove();
            onOffSuperBd();
            if (!(headerInner.classList.contains('active'))) {
                bodyLock.classList.remove('active');
            }
        }, 3000)
    }
}

inputName.addEventListener('blur', validateName);
inputPhone.addEventListener('blur', validatePhone);
inputPhone.addEventListener('focus', (e) => { e.currentTarget.value = `+` });
function validateName() {
    let flag = true;
    if (inputName.value == '') {
        inputName.classList.add('shadow-red');
        flag = false;
    } else {
        inputName.classList.remove('shadow-red');
    }
    return flag;
}
function validatePhone() {
    let flag = true;
    if (/\+?[0-9]{10,15}/.test(inputPhone.value)) {
        inputPhone.classList.remove('shadow-red')
    } else {
        inputPhone.classList.add('shadow-red');
        flag = false;
    }
    return flag;
}

closePopup.addEventListener('click', offPopupPhone);
popupPhone.addEventListener('click', offPopupPhone);
function offPopupPhone(event) {
    if (!(event.target.closest('.get-number')) ||
        event.target.closest('.btn-close')) {
        popupPhone.classList.remove('active');
        bodyLock.classList.remove('active');
    }
}