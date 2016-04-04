"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainersEdict extends Card {
  constructor(game) {
    super(game, "Chainer's Edict", "Friday Night Magic", "pFNM");
  }
}

module.exports = ChainersEdict;
