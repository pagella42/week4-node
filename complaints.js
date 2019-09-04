const imports = require('./consts')
const func = require('./complaintsHandler')


let complaint1 = {
    text: "I'm not getting enough money",
    type: imports.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: imports.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: imports.EMOTIONS
}

func.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
func.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
func.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."