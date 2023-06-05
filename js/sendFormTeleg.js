//let = there is form already;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validation()) {
        let dataToTeleg = {
            'Заказ с сайта:': siteName,
            'Имя:': form.nameInput.value,
            'Почта:': form.mailInput.value,
            'Сообщение:': form.textarea.value,
        }

        for (let key in dataToTeleg) {
            txt += `<b>${key}</b> ${dataToTeleg[key]}%0A`;
        }

        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`);
        if (darkBdSuper.classList.contains('active')) {
            onOffSuperBd();
        }

        onOffSuperBd();
        darkBdSuper.insertAdjacentHTML('afterBegin', '<div id = "message-del">Cообщение отправлено!</div>');

        setTimeout(function () {
            document.querySelector('#message-del').remove();
            onOffSuperBd();
            if (!(headerInner.classList.contains('active'))) {
                bodyLock.classList.remove('active');
            }
        }, 3000)
    };

    [...form.children].forEach(elem => {
        if (!(elem.value == '')) elem.value = '';
    });
})

function validation() {
    let flag = true;
    if (form.nameInput.value == '') {
        form.nameInput.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите имя</p>');
        flag = false;
    } else if (document.querySelector('.warning')) {
        document.querySelectorAll('.warning').forEach(el => el.remove());
    }
    if (form.mailInput.value == '') {
        form.mailInput.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите Email</p>');
        flag = false;
    } else if (document.querySelector('.warning') && !(form.nameInput.value == '')) {
        document.querySelectorAll('.warning').forEach(el => el.remove());
    }
    if (form.textarea.value == '') {
        form.textarea.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите текст сообщение в проивольной форме</p>');
        flag = false;
    } else if (document.querySelector('.warning' && !(form.nameInput.value == ''))) {
        document.querySelectorAll('.warning').forEach(el => el.remove());
    }
    return flag;
}