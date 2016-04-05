"use strict";
const Constants = require ("../../../Constants");
const CraterHellionBase = require("../setC13/CraterHellion");

class CraterHellion extends CraterHellionBase {
  constructor(game) {
    super(game, "Crater Hellion", "Vintage Masters", "VMA");
  }
}

module.exports = CraterHellion;
