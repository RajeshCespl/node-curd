const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongoproctice`);
const userSchema = mongoose.Schema({
    email:String,
    username:String
})
module.exports = mongoose.model('contact',userSchema);