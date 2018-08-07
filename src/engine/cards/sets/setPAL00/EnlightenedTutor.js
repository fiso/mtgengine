"use strict";
const Constants = require ("../../../Constants");
const EnlightenedTutorBase = require("../setEMA/EnlightenedTutor");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor (game) {
    super(game, "Enlightened Tutor", "Arena League 2000", "PAL00");
  }
}

module.exports = EnlightenedTutor;
