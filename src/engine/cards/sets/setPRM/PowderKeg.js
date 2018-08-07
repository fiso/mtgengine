"use strict";
const Constants = require ("../../../Constants");
const PowderKegBase = require("../setP04/PowderKeg");

class PowderKeg extends PowderKegBase {
  constructor (game) {
    super(game, "Powder Keg", "Magic Online Promos", "PRM");
  }
}

module.exports = PowderKeg;
