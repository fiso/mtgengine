"use strict";
const Constants = require ("../../../Constants");
const ChainersEdictBase = require("../setVMA/ChainersEdict");

class ChainersEdict extends ChainersEdictBase {
  constructor (game) {
    super(game, "Chainer's Edict", "World Championship Decks 2002", "WC02");
  }
}

module.exports = ChainersEdict;
