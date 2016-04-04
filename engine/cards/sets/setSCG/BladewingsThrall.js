"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BladewingsThrall extends Card {
  constructor(game) {
    super(game, "Bladewing's Thrall", "Scourge", "SCG");
  }
}

module.exports = BladewingsThrall;
