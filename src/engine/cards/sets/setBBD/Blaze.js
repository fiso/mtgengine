"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaze", "Battlebond", "BBD");
  }
}

module.exports = Blaze;
