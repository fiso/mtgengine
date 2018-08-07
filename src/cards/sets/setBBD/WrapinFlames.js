"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrapinFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrap in Flames", "Battlebond", "BBD");
  }
}

module.exports = WrapinFlames;
