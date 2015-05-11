var mongoose = require('mongoose');

exports.UidModel = mongoose.model("Uid", {
    username: String
});
