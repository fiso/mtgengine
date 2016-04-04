"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalSurge extends Card {
  constructor(game) {
    super(game, "Primal Surge", "Avacyn Restored", "AVR");
  }
}

module.exports = PrimalSurge;
