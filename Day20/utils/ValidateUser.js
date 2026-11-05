const validator = require('validator');


function validate(data) {
    const mandatoryField = ["firstName","emailId","age","password"];
            const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

            if(!IsAllowed)
                throw new Error(" Fields are missing");

            if(!validator.isEmail(data.emailId))
                throw new Error(" EmailId is not valid");

            if(!validator.isStrongPassword(data.password))
                throw new Error(" Password is weak");

            if(!(data.firstName.length >=3 && data.firstName.length <=20))
                throw new Error(" First Name is not valid i.e bw 3 and 20 size");
            
}

module.exports = validate