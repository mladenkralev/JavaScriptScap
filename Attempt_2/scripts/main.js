'use strict';

var movableObject;

function MovableObject (nameOfImage, left, top, speed) {
    this.speed = speed;
    var imgObj = document.getElementById(nameOfImage);
    var animate= null;
    imgObj.style.position = 'relative';
    imgObj.style.left = left + 'px'; 
    imgObj.style.top = top + 'px';
    
    this.getImg = function() {
        return imgObj;
    }
    
    this.moveRight= function() {
        imgObj.style.left = parseInt(imgObj.style.left, "10") + 10 + 'px';
    }

     this.moveLeft= function() {
        imgObj.style.left = parseInt(imgObj.style.left, "10") - 10 + 'px';
    }

     this.moveUp= function() {
        imgObj.style.top = parseInt(imgObj.style.top, "10") - 10 + 'px';
    }

    this. moveDown= function () {
        imgObj.style.top = parseInt(imgObj.style.top, "10") + 10 + 'px';
    }

    this.stop= function () {
       this.getImg().style.left = '0px'; 
    }
    
}


    



function init() {
    
    movableObject = new MovableObject('myImage',0,0,25);
}

document.onkeydown = checkKey;

function checkKey(e) {
    
    if(movableObject == null) {
        return;
    }
    
    e = e || window.event;

    if (e.keyCode == '38') {
       movableObject.moveUp();
    }
    else if (e.keyCode == '40') {
        movableObject.moveDown();
    }
    else if (e.keyCode == '37') {
       movableObject.moveLeft();
    }
    else if (e.keyCode == '39') {
        movableObject.moveRight();
    }
    else if (e.keyCode == '8') {
        movableObject.jump();
    }

}

window.onload = init;


