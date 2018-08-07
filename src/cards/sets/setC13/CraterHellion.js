"use strict";
const Constants = require ("../../../Constants");
const CraterHellionBase = require("../setEMA/CraterHellion");

class CraterHellion extends CraterHellionBase {
  constructor (game) {
    super(game, "Crater Hellion", "Commander 2013", "C13");
  }
}

module.exports = CraterHellion;
