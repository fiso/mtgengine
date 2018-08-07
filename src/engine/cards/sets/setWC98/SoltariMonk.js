"use strict";
const Constants = require ("../../../Constants");
const SoltariMonkBase = require("../setTPR/SoltariMonk");

class SoltariMonk extends SoltariMonkBase {
  constructor (game) {
    super(game, "Soltari Monk", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SoltariMonk;
