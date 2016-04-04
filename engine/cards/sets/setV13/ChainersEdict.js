"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChainersEdictBase = require("../setpFNM/ChainersEdict.js");

class ChainersEdict extends ChainersEdictBase {
  constructor(game) {
    super(game, "Chainer's Edict", "From the Vault: Twenty", "V13");
  }
}

module.exports = ChainersEdict;
