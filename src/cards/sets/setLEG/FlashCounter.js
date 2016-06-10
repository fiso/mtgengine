"use strict";
const Constants = require ("../../../Constants");
const FlashCounterBase = require("../set8ED/FlashCounter");

class FlashCounter extends FlashCounterBase {
  constructor (game) {
    super(game, "Flash Counter", "Legends", "LEG");
  }
}

module.exports = FlashCounter;
