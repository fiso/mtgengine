"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AirElemental extends Card {
  constructor(game) {
    super(game, "Air Elemental", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AirElemental;
