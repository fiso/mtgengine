"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalWhisperer extends Card {
  constructor(game) {
    super(game, "Primal Whisperer", "Legions", "LGN");
  }
}

module.exports = PrimalWhisperer;
