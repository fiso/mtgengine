"use strict";
const Constants = require ("../../../Constants");
const EnlightenedTutorBase = require("../setEMA/EnlightenedTutor");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor (game) {
    super(game, "Enlightened Tutor", "World Championship Decks 2000", "WC00");
  }
}

module.exports = EnlightenedTutor;
