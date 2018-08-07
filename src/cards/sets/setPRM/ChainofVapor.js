"use strict";
const Constants = require ("../../../Constants");
const ChainofVaporBase = require("../setC16/ChainofVapor");

class ChainofVapor extends ChainofVaporBase {
  constructor (game) {
    super(game, "Chain of Vapor", "Magic Online Promos", "PRM");
  }
}

module.exports = ChainofVapor;
