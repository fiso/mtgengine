"use strict";
const Constants = require ("../../../Constants");
const PowderKegBase = require("../setP04/PowderKeg");

class PowderKeg extends PowderKegBase {
  constructor (game) {
    super(game, "Powder Keg", "Urza's Destiny", "UDS");
  }
}

module.exports = PowderKeg;
