"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainLightning extends Card {
  constructor(game) {
    super(game, "Chain Lightning", "Legends", "LEG");
  }
}

module.exports = ChainLightning;
