const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({})

const Review = mongoose.model("Review", ReviewSchema)

module.exports = { Review };