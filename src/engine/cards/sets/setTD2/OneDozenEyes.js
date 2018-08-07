"use strict";
const Constants = require ("../../../Constants");
const OneDozenEyesBase = require("../setC13/OneDozenEyes");

class OneDozenEyes extends OneDozenEyesBase {
  constructor (game) {
    super(game, "One Dozen Eyes", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = OneDozenEyes;
