"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpreadingPlague extends Card {
  constructor(game) {
    super(game, "Spreading Plague", "Invasion", "INV");
  }
}

module.exports = SpreadingPlague;
