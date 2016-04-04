"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZuranEnchanter extends Card {
  constructor(game) {
    super(game, "Zuran Enchanter", "Ice Age", "ICE");
  }
}

module.exports = ZuranEnchanter;
