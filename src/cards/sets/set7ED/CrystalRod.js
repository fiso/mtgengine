"use strict";
const Constants = require ("../../../Constants");
const CrystalRodBase = require("../set8ED/CrystalRod");

class CrystalRod extends CrystalRodBase {
  constructor (game) {
    super(game, "Crystal Rod", "Seventh Edition", "7ED");
  }
}

module.exports = CrystalRod;
