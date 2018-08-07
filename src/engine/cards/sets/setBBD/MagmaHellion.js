"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaHellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Hellion", "Battlebond", "BBD");
  }
}

module.exports = MagmaHellion;
