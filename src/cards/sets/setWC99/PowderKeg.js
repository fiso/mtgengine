"use strict";
const Constants = require ("../../../Constants");
const PowderKegBase = require("../setP04/PowderKeg");

class PowderKeg extends PowderKegBase {
  constructor (game) {
    super(game, "Powder Keg", "World Championship Decks 1999", "WC99");
  }
}

module.exports = PowderKeg;
