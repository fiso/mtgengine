"use strict";
const Constants = require ("../../../Constants");
const WaxmaneBakuBase = require("../setMM2/WaxmaneBaku");

class WaxmaneBaku extends WaxmaneBakuBase {
  constructor (game) {
    super(game, "Waxmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WaxmaneBaku;
