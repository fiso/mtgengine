"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GideonChampionofJustice extends Card {
  constructor(game) {
    super(game, "Gideon, Champion of Justice", "Gatecrash", "GTC");
  }
}

module.exports = GideonChampionofJustice;
