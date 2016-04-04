"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianHydra extends Card {
  constructor(game) {
    super(game, "Balduvian Hydra", "Ice Age", "ICE");
  }
}

module.exports = BalduvianHydra;
