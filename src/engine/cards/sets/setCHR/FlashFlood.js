"use strict";
const Constants = require ("../../../Constants");
const FlashFloodBase = require("../setME3/FlashFlood");

class FlashFlood extends FlashFloodBase {
  constructor (game) {
    super(game, "Flash Flood", "Chronicles", "CHR");
  }
}

module.exports = FlashFlood;
