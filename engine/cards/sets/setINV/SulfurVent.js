"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SulfurVent extends Card {
  constructor(game) {
    super(game, "Sulfur Vent", "Invasion", "INV");
  }
}

module.exports = SulfurVent;
