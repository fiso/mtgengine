"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnholyGrotto extends Card {
  constructor(game) {
    super(game, "Unholy Grotto", "Onslaught", "ONS");
  }
}

module.exports = UnholyGrotto;
