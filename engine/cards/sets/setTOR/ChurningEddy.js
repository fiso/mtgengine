"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChurningEddy extends Card {
  constructor(game) {
    super(game, "Churning Eddy", "Torment", "TOR");
  }
}

module.exports = ChurningEddy;
