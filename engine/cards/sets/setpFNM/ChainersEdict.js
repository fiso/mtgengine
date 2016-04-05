"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainersEdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Chainer's Edict", "Friday Night Magic", "pFNM");
  }
}

module.exports = ChainersEdict;
