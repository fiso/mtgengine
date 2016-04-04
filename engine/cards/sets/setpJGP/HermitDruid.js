"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HermitDruid extends Card {
  constructor(game) {
    super(game, "Hermit Druid", "Judge Gift Program", "pJGP");
  }
}

module.exports = HermitDruid;
