"use strict";
const Constants = require ("../../../Constants");
const ErgRaidersBase = require("../setA25/ErgRaiders");

class ErgRaiders extends ErgRaidersBase {
  constructor (game) {
    super(game, "Erg Raiders", "Masters Edition", "MED");
  }
}

module.exports = ErgRaiders;
