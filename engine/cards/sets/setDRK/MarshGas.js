"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshGasBase = require("../set4ED/MarshGas.js");

class MarshGas extends MarshGasBase {
  constructor(game) {
    super(game, "Marsh Gas", "The Dark", "DRK");
  }
}

module.exports = MarshGas;
