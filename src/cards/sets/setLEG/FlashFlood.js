"use strict";
const Constants = require ("../../../Constants");
const FlashFloodBase = require("../setCHR/FlashFlood");

class FlashFlood extends FlashFloodBase {
  constructor (game) {
    super(game, "Flash Flood", "Legends", "LEG");
  }
}

module.exports = FlashFlood;
