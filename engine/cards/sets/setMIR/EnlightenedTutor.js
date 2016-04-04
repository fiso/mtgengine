"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnlightenedTutorBase = require("../setpARL/EnlightenedTutor.js");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor(game) {
    super(game, "Enlightened Tutor", "Mirage", "MIR");
  }
}

module.exports = EnlightenedTutor;
