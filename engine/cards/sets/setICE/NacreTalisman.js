"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NacreTalisman extends Card {
  constructor(game) {
    super(game, "Nacre Talisman", "Ice Age", "ICE");
  }
}

module.exports = NacreTalisman;
