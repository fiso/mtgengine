"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CauldronDance extends Card {
  constructor(game) {
    super(game, "Cauldron Dance", "Invasion", "INV");
  }
}

module.exports = CauldronDance;
