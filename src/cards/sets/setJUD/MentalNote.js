"use strict";
const Constants = require ("../../../Constants");
const MentalNoteBase = require("../setWC02/MentalNote");

class MentalNote extends MentalNoteBase {
  constructor (game) {
    super(game, "Mental Note", "Judgment", "JUD");
  }
}

module.exports = MentalNote;
