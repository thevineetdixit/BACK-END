const bcrypt = require('bcrypt');

const password = "Vineet@123";

async function Hashing() {
    //hashcode + salt
    // console.time("anystring");

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password,salt); //this 10 is = two ki power 10
    //genrally we use this only and hashpass have all info about round salt and pass 

    const ans = await bcrypt.compare(password,hashpass);
    console.log(ans);

    // console.log(salt);
    // console.log(hashpass);


    // console.timeEnd("anystring");
    // console.log(hashpass);
}

Hashing();

//same pass will gen other hash pass cause bcrypt will auto generate random salt 

//QNS = why this process is so slow i.e we use await 