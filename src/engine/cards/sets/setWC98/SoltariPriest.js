"use strict";
const Constants = require ("../../../Constants");
const SoltariPriestBase = require("../setTPR/SoltariPriest");

class SoltariPriest extends SoltariPriestBase {
  constructor (game) {
    super(game, "Soltari Priest", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SoltariPriest;
