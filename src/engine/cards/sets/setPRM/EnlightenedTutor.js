"use strict";
const Constants = require ("../../../Constants");
const EnlightenedTutorBase = require("../setEMA/EnlightenedTutor");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor (game) {
    super(game, "Enlightened Tutor", "Magic Online Promos", "PRM");
  }
}

module.exports = EnlightenedTutor;
