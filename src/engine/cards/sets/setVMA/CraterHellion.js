"use strict";
const Constants = require ("../../../Constants");
const CraterHellionBase = require("../setEMA/CraterHellion");

class CraterHellion extends CraterHellionBase {
  constructor (game) {
    super(game, "Crater Hellion", "Vintage Masters", "VMA");
  }
}

module.exports = CraterHellion;
