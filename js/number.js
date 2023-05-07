let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');

let item1Obj = {
    leftX: 45,
    centerX: 190,
    rigthX: 322,
    topY: 185,
    centerY: 326,
    bottomY: 469,
    transXL: 35,
    transXR: 55,
    transYT: 160,
    transYB: 180,
}
let item2Obj = {
    leftX: 365,
    centerX: 455,
    rigthX: 555,
    topY: 135,
    centerY: 233,
    bottomY: 325,
    transXL: 355,
    transXR: 375,
    transYT: 125,
    transYB: 145,
    // x 365, 455, 555
    // y 135, 233, 325
}
let item3Obj = {
    leftX: 330,
    centerX: 450,
    rigthX: 569,
    topY: 405,
    centerY: 520,
    bottomY: 645,
    transXL: 310,
    transXR: 340,
    transYT: 395,
    transYB: 415,
    // x 330, 450, 569
    // y 405, 520, 645
    // 330, 405
}

item1.addEventListener('mousemove', function (event) {
    let x = event.layerX;
    let y = event.layerY;
    moveCercle(item1, x, y, item1Obj);
})
item1.addEventListener('mouseleave', function () {
    item1.removeAttribute('style');
})

// item2
item2.addEventListener('mousemove', function (event) {
    let x = event.layerX;
    let y = event.layerY;
    moveCercle(item2, x, y, item2Obj);
})
item2.addEventListener('mouseleave', function () {
    item2.removeAttribute('style');
})

// item3
item3.addEventListener('mousemove', function (event) {
    let x = event.layerX;
    let y = event.layerY;
    moveCercle(item3, x, y, item3Obj);
    // console.log('x' + x, 'y' + y)
})
item3.addEventListener('mouseleave', function () {
    item3.removeAttribute('style');
})


function moveCercle(item, x, y, obj) {
    if (x > obj.leftX && x < obj.centerX && obj.centerY > y && obj.topY < y) {
        item.setAttribute('style', `transform: translate(${obj.transXL}px, ${obj.transYT}px)`);
    } else if (obj.centerX < x && x < obj.rigthX && obj.centerY > y && y > obj.topY) {
        item.setAttribute('style', `transform: translate(${obj.transXR}px, ${obj.transYT}px)`);
    } else if (obj.leftX < x && x < obj.centerX && obj.centerY < y && y < obj.bottomY) {
        item.setAttribute('style', `transform: translate(${obj.transXL}px, ${obj.transYB}px)`);
    } else if (obj.centerX < x && x < obj.rigthX && obj.centerY < y && y < obj.bottomY) {
        item.setAttribute('style', `transform: translate(${obj.transXR}px, ${obj.transYB}px)`);
    }
}