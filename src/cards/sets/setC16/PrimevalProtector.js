"use strict";
const Constants = require ("../../../Constants");
const PrimevalProtectorBase = require("../setPZ2/PrimevalProtector");

class PrimevalProtector extends PrimevalProtectorBase {
  constructor (game) {
    super(game, "Primeval Protector", "Commander 2016", "C16");
  }
}

module.exports = PrimevalProtector;
