"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HematiteTalisman extends Card {
  constructor(game) {
    super(game, "Hematite Talisman", "Ice Age", "ICE");
  }
}

module.exports = HematiteTalisman;
