"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FanaticofXenagosBase = require("../setBNG/FanaticofXenagos.js");

class FanaticofXenagos extends FanaticofXenagosBase {
  constructor(game) {
    super(game, "Fanatic of Xenagos", "Friday Night Magic", "pFNM");
  }
}

module.exports = FanaticofXenagos;
