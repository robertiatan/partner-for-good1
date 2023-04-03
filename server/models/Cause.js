const mongoose = require("mongoose");

const causeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Cause name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    // picture: TBD,
    contactName: {
        type: String,
        required: [true, "Contact name is required"]
    },
    contactEmail: {
        type: String,
        required: [true, "Contact email is required"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    headquarters: {
        type: String,
        required: [true, "Address is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    websiteLink: {
        type: String,
        required: false
    }

});

const Cause = mongoose.model("cause", causeSchema);

module.exports = Cause;