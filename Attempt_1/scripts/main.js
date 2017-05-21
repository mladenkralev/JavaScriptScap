var imgObj = null;
var animate ;
var speed = 25;

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
    imgObj.style.top = '0px'
}

function moveRight(){
    clearTimeout(animate);
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    animate = setTimeout(moveRight,speed); // call moveRight in 20msec
}

function moveLeft(){
    clearTimeout(animate);
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    animate = setTimeout(moveLeft,speed); // call moveRight in 20msec
}

function moveUp(){
    clearTimeout(animate);
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
    animate = setTimeout(moveUp,speed); // call moveRight in 20msec
}

function moveDown(){
    clearTimeout(animate);
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
    animate = setTimeout(moveDown,speed); // call moveRight in 20msec
}

function stop(){
    clearTimeout(animate);
    imgObj.style.left = '0px'; 
}




document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
       moveLeft();
    }
    else if (e.keyCode == '39') {
        moveRight();
    }

}

window.onload = init;