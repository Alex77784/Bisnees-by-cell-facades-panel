//let = there is form already;

let token = "6126020399:AAFXu7EJ5rBMRX_fOPcsT-mxKQa6jvujEaE";
let chatId = "-935722415";
let siteName = "Бизнес на продаже фасадных панелей";
let txt = '';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validation();
    // look panel tools URL          ==================================================
    if (!(form.nameInput.value == '' &&
        form.mailInput.value == '' &&
        form.textarea.value == '')) {
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
    };

    [...form.children].forEach(elem => {
        if (!(elem.value == '')) elem.value = '';
    });
})

function validation() {
    if (form.nameInput.value == '') {
        form.nameInput.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите имя</p>');
    } else {
        if (document.querySelector('.warning')) {
            document.querySelectorAll('.warning').forEach(el => el.remove());
        }
    }
    if (form.mailInput.value == '') {
        form.mailInput.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите Email</p>');
    } else if (document.querySelector('.warning') && !(form.nameInput.value == '')) {
        document.querySelectorAll('.warning').forEach(el => el.remove());
    }
    if (form.textarea.value == '') {
        form.textarea.insertAdjacentHTML('beforeBegin', '<p class = "warning">Введите текст сообщение в проивольной форме</p>');
    } else if (document.querySelector('.warning' && !(form.nameInput.value == ''))) {
        document.querySelectorAll('.warning').forEach(el => el.remove());
    }
}