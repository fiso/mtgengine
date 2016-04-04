"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonTyrant extends Card {
  constructor(game) {
    super(game, "Dragon Tyrant", "Scourge", "SCG");
  }
}

module.exports = DragonTyrant;
