"use strict";
const Constants = require ("../../../Constants");
const ChainersEdictBase = require("../setVMA/ChainersEdict");

class ChainersEdict extends ChainersEdictBase {
  constructor (game) {
    super(game, "Chainer's Edict", "Friday Night Magic 2006", "F06");
  }
}

module.exports = ChainersEdict;
