"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KelsinkoRanger extends Card {
  constructor(game) {
    super(game, "Kelsinko Ranger", "Ice Age", "ICE");
  }
}

module.exports = KelsinkoRanger;
