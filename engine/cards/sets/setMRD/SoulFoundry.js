"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulFoundry extends Card {
  constructor(game) {
    super(game, "Soul Foundry", "Mirrodin", "MRD");
  }
}

module.exports = SoulFoundry;
