const imports = require('./consts')




let handleComplaints = function(complaint){

    if(complaint.type == imports.FINANCE){
        console.log("Money doesn't grow on trees, you know.")
    }
    else if(complaint.type == imports.WEATHER){
        console.log("It is the way of nature. Not much to be done.")
    }
    else if(complaint.type == imports.EMOTIONS){
        console.log("It'll pass, as all things do, with time.")
    }

}

module.exports.handleComplaints = handleComplaints