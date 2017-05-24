'use strict';

var Task = function (name, time) {
    this.name = name;
    this.time = time;
};

/*
 *  Syntax to add method in prototype object
 *
 *  ClassName.prototype.methodName = function(arguments) {
 *
 *  }
 */

Task.prototype.toString = function ( ) {
    return this.name + " " + this.time;
}

Task.prototype.timeToComplete = function ( ) {
    this.time += this.time;
}

Task.prototype.getTime = function ( ) {
     return this.time;
}

function init() {
    var task1 = new Task("Saving", 5);
    var task2 = new Task("Loading", 6);
    var task3 = new Task("Deleting", 7);
    var task4 = new Task("Duplicate", 8);
    
    console.log(task1.toString());
    console.log(task2.toString());
    console.log(task3.toString());
    console.log(task4.toString());
}


window.onload = init;


