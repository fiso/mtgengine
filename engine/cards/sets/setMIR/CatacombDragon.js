"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatacombDragon extends Card {
  constructor(game) {
    super(game, "Catacomb Dragon", "Mirage", "MIR");
  }
}

module.exports = CatacombDragon;
