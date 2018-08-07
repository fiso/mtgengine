"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Impulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Impulse", "Battlebond", "BBD");
  }
}

module.exports = Impulse;
