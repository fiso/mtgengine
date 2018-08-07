"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostLynx extends UnimplementedCard {
  constructor (game) {
    super(game, "Frost Lynx", "Battlebond", "BBD");
  }
}

module.exports = FrostLynx;
