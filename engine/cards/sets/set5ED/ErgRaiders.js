"use strict";
const Constants = require ("../../../Constants");
const ErgRaidersBase = require("../setARN/ErgRaiders");

class ErgRaiders extends ErgRaidersBase {
  constructor(game) {
    super(game, "Erg Raiders", "Fifth Edition", "5ED");
  }
}

module.exports = ErgRaiders;
