"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicIntrusion extends Card {
  constructor(game) {
    super(game, "Psychic Intrusion", "Theros", "THS");
  }
}

module.exports = PsychicIntrusion;
