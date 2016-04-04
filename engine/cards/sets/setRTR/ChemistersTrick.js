"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChemistersTrick extends Card {
  constructor(game) {
    super(game, "Chemister's Trick", "Return to Ravnica", "RTR");
  }
}

module.exports = ChemistersTrick;
