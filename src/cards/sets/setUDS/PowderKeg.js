"use strict";
const Constants = require ("../../../Constants");
const PowderKegBase = require("../setpMPR/PowderKeg");

class PowderKeg extends PowderKegBase {
  constructor (game) {
    super(game, "Powder Keg", "Urza's Destiny", "UDS");
  }
}

module.exports = PowderKeg;
