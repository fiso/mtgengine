"use strict";
const Constants = require ("../../../Constants");
const TreasureBase = require("../setPLNY/Treasure");

class Treasure extends TreasureBase {
  constructor (game) {
    super(game, "Treasure", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Treasure;
