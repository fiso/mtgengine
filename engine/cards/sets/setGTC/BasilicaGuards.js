"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasilicaGuards extends Card {
  constructor(game) {
    super(game, "Basilica Guards", "Gatecrash", "GTC");
  }
}

module.exports = BasilicaGuards;
