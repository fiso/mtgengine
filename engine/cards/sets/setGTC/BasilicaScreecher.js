"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasilicaScreecher extends Card {
  constructor(game) {
    super(game, "Basilica Screecher", "Gatecrash", "GTC");
  }
}

module.exports = BasilicaScreecher;
