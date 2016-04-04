"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromaticLantern extends Card {
  constructor(game) {
    super(game, "Chromatic Lantern", "Return to Ravnica", "RTR");
  }
}

module.exports = ChromaticLantern;
