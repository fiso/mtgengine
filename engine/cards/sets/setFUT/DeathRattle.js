"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathRattle extends Card {
  constructor(game) {
    super(game, "Death Rattle", "Future Sight", "FUT");
  }
}

module.exports = DeathRattle;
