let bodyLock = document.body;
let btnUp = document.querySelector('.btn-up');
let innovationImg = document.querySelector('.about-us__img>img');
let btns = document.querySelectorAll('.click');
let blockSecret = document.querySelector('#secret');
let mediaWidth992 = window.matchMedia('(min-width: 992px)');
let mediaWidth767 = window.matchMedia('(min-width: 767px)');
let form = document.forms.formMail;
let img = document.querySelector('.innovation__img');
let beforeButton = document.querySelector('.innovation__button');
let back = document.querySelector('.innovation__box-content');
let youtube = document.querySelector('.intro__box-youtube');
let buttonPlayYoutube = document.querySelector('.intro__bottonPlayYoutube');
let boxButton = document.querySelector('.intro__box-button');
let content = document.querySelector('.intro__content');
let width = window.screen.width;
let darkBd = document.querySelector('.dark-bd');
let darkBdSuper = document.querySelector('.dark-bd-super');
let formApp = document.querySelector('.leave-mail__col-mail');
let closeButton = document.querySelector('.close-button');
let headerInner = document.querySelector('.header__inner');
let burger = document.querySelector('.burger');
let navLinks = document.querySelectorAll('.nav__link');
let callEmail = document.querySelectorAll('.call-email');
let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');

// backCall file
let btnAskPhone = document.querySelectorAll('.back-call');
let popupPhone = document.querySelector('.bd-form');
let formSentPhone = document.forms.getNumber;
let closePopup = formSentPhone[0];
let inputName = formSentPhone.userName;
let inputPhone = formSentPhone.userPhone;
let phoneNum = '';

//sensFormTelegram file
let token = "6126020399:AAFXu7EJ5rBMRX_fOPcsT-mxKQa6jvujEaE";
let chatId = "-976033618";
let siteName = "Бизнес на продаже фасадных панелей";
let txt = '';

// offer
let offerTitle = document.querySelector('.offer__title');
// benefit
let cardsBenefit = document.querySelectorAll('.benefit__card');
// secret
let secretTitle = document.querySelector('.secret__title');
// innovation
let innovTitle = document.querySelector('.innovation__title>span');
// about-us
let aboutTitle = document.querySelector('.about-us__title');
// number
let numberTitle = document.querySelector('.number__inner');
// contact
let leaveMailTitle = document.querySelector('.leave-mail__title');
let leaveMailInner = document.querySelector('.leave-mail__inner');