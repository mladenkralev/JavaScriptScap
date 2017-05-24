'use strict';

// som json data passed from taskRepository
var Task = function (data) {
    this.name = data.name;
    this.time = data.time;
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

// Export reference constructor
module.exports = Task;