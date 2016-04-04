"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoodedAssassin extends Card {
  constructor(game) {
    super(game, "Hooded Assassin", "Fate Reforged", "FRF");
  }
}

module.exports = HoodedAssassin;
