"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashCounterBase = require("../set8ED/FlashCounter.js");

class FlashCounter extends FlashCounterBase {
  constructor(game) {
    super(game, "Flash Counter", "Legends", "LEG");
  }
}

module.exports = FlashCounter;
