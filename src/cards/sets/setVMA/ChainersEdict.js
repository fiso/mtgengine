"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainersEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Chainer's Edict", "Vintage Masters", "VMA");
  }
}

module.exports = ChainersEdict;
