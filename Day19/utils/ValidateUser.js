
function validator(data) {
    const mandatoryField = ["firstName","emailId","age"];
            const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

            if(!IsAllowed)
                throw new Error(" Fields are missing");
}

module.exports = validator