"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DualCasting extends Card {
  constructor(game) {
    super(game, "Dual Casting", "Avacyn Restored", "AVR");
  }
}

module.exports = DualCasting;
