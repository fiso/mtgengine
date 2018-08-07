"use strict";
const Constants = require ("../../../Constants");
const ChainersEdictBase = require("../setVMA/ChainersEdict");

class ChainersEdict extends ChainersEdictBase {
  constructor (game) {
    super(game, "Chainer's Edict", "Torment", "TOR");
  }
}

module.exports = ChainersEdict;
