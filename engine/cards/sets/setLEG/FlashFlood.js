"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashFloodBase = require("../setCHR/FlashFlood.js");

class FlashFlood extends FlashFloodBase {
  constructor(game) {
    super(game, "Flash Flood", "Legends", "LEG");
  }
}

module.exports = FlashFlood;
