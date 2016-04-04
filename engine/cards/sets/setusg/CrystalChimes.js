"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrystalChimesBase = require("../setC15/CrystalChimes.js");

class CrystalChimes extends CrystalChimesBase {
  constructor(game) {
    super(game, "Crystal Chimes", "Urza's Saga", "USG");
  }
}

module.exports = CrystalChimes;
