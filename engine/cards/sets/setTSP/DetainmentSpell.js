"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DetainmentSpell extends Card {
  constructor(game) {
    super(game, "Detainment Spell", "Time Spiral", "TSP");
  }
}

module.exports = DetainmentSpell;
