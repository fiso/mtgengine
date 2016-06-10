"use strict";
const Constants = require ("../../../Constants");
const ChainersEdictBase = require("../setpFNM/ChainersEdict");

class ChainersEdict extends ChainersEdictBase {
  constructor (game) {
    super(game, "Chainer's Edict", "From the Vault: Twenty", "V13");
  }
}

module.exports = ChainersEdict;
