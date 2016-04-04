"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gridlock extends Card {
  constructor(game) {
    super(game, "Gridlock", "Gatecrash", "GTC");
  }
}

module.exports = Gridlock;
