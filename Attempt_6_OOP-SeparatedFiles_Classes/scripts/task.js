

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

// Export reference constructor
module.exports = Task;