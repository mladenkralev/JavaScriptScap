var Task = require('./task');
var Repo = require('./taskRepository');


var task1 = new Task(Repo.get(1))
