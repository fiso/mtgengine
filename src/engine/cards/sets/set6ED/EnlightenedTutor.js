"use strict";
const Constants = require ("../../../Constants");
const EnlightenedTutorBase = require("../setEMA/EnlightenedTutor");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor (game) {
    super(game, "Enlightened Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EnlightenedTutor;
