const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const root = 'https://s3.amazonaws.com/ourbank>';
const subSquares = {
    text: String, // Generated from squares on board creation
    checked: { type: Boolean, default: false },
    position: Number

    // getter attribute for uploading/storing proof for adventure mode
    // proof: {
    //     type: String,
    //     get: v => `${root}${v}`
    //   }
}

const boardDescrip = {
    creator: String,
    theme: String,
}

const boardSchema = Schema({
    userID: String,
    won: { type: Boolean, default: false},
    gameOn: { type: Boolean, default: true},
    gameID: String,
    gameDescription: boardDescrip,
    squares: [ subSquares ]
})


module.exports = Board = mongoose.model('Board', boardSchema)