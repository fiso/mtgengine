"use strict";
const Constants = require ("../../../Constants");
const ThranQuarryBase = require("../setPRM/ThranQuarry");

class ThranQuarry extends ThranQuarryBase {
  constructor (game) {
    super(game, "Thran Quarry", "World Championship Decks 2000", "WC00");
  }
}

module.exports = ThranQuarry;
