"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashFlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash Flood", "Chronicles", "CHR");
  }
}

module.exports = FlashFlood;
