var repo = function() {
    
    return {
        get: function(id, time) {
            console.log("Getting task" + id) ;
            return {
                //json
                name : "new task form db" + id,
                time : time
            }
        }
    }
}

module.exports = repo();