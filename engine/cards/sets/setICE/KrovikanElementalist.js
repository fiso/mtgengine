"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanElementalist extends Card {
  constructor(game) {
    super(game, "Krovikan Elementalist", "Ice Age", "ICE");
  }
}

module.exports = KrovikanElementalist;
