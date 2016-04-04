"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalachiteTalisman extends Card {
  constructor(game) {
    super(game, "Malachite Talisman", "Ice Age", "ICE");
  }
}

module.exports = MalachiteTalisman;
