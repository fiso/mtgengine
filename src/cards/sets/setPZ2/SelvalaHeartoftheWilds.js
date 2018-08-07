"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelvalaHeartoftheWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Selvala, Heart of the Wilds", "You Make the Cube", "PZ2");
  }
}

module.exports = SelvalaHeartoftheWilds;
