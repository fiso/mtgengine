"use strict";
const Constants = require ("../../../Constants");
const CraterHellionBase = require("../setC13/CraterHellion");

class CraterHellion extends CraterHellionBase {
  constructor (game) {
    super(game, "Crater Hellion", "Eternal Masters", "EMA");
  }
}

module.exports = CraterHellion;
