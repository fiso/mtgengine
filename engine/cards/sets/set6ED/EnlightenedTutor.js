"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnlightenedTutorBase = require("../setpARL/EnlightenedTutor.js");

class EnlightenedTutor extends EnlightenedTutorBase {
  constructor(game) {
    super(game, "Enlightened Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EnlightenedTutor;
