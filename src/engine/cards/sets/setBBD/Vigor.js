"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vigor extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigor", "Battlebond", "BBD");
  }
}

module.exports = Vigor;
