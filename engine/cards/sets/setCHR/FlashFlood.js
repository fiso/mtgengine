"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlashFlood extends Card {
  constructor(game) {
    super(game, "Flash Flood", "Chronicles", "CHR");
  }
}

module.exports = FlashFlood;
