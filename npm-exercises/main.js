// let validator = require('validator')



// console.log(validator.isEmail("shoobert@dylan.com"))

// console.log(validator.isMobilePhone("786-329-9958" , "en-US"))

// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"

// console.log(validator.blacklist(text, blacklist))

//---------

let faker = require('faker')

let makeHuman = function(times){
    for(let i = 0; i < times; i++){
        console.log(faker.name.findName())
    }
}

makeHuman(5)