"use strict";
const Constants = require ("../../../Constants");
const CrystalChimesBase = require("../setC15/CrystalChimes");

class CrystalChimes extends CrystalChimesBase {
  constructor (game) {
    super(game, "Crystal Chimes", "Urza's Saga", "USG");
  }
}

module.exports = CrystalChimes;
