"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodCelebrant extends Card {
  constructor(game) {
    super(game, "Blood Celebrant", "Legions", "LGN");
  }
}

module.exports = BloodCelebrant;
