"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShorelineRaider extends Card {
  constructor(game) {
    super(game, "Shoreline Raider", "Invasion", "INV");
  }
}

module.exports = ShorelineRaider;
