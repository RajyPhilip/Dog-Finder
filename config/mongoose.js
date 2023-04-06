const mongoose = require('mongoose');
const mongoUrl = process.env.DB;

mongoose.set('strictQuery', false);

main()
.then(() => {console.log("Successfully connected to database ")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
}