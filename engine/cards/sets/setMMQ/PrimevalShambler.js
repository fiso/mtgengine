"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimevalShamblerBase = require("../set8ED/PrimevalShambler.js");

class PrimevalShambler extends PrimevalShamblerBase {
  constructor(game) {
    super(game, "Primeval Shambler", "Mercadian Masques", "MMQ");
  }
}

module.exports = PrimevalShambler;
