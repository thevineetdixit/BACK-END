const mongoose = require('mongoose');
//mongoose act as an interface which talks to your server through your js code

async function main() {
   
  await mongoose.connect(process.env.MONGO_URI);

}


module.exports = main;