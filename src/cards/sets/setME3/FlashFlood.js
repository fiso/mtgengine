"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashFlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash Flood", "Masters Edition III", "ME3");
  }
}

module.exports = FlashFlood;
