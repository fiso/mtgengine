"use strict";
const Constants = require ("../../../Constants");
const ErgRaidersBase = require("../setARN/ErgRaiders");

class ErgRaiders extends ErgRaidersBase {
  constructor(game) {
    super(game, "Erg Raiders", "Fourth Edition", "4ED");
  }
}

module.exports = ErgRaiders;
