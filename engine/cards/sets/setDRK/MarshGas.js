"use strict";
const Constants = require ("../../../Constants");
const MarshGasBase = require("../set4ED/MarshGas");

class MarshGas extends MarshGasBase {
  constructor(game) {
    super(game, "Marsh Gas", "The Dark", "DRK");
  }
}

module.exports = MarshGas;
