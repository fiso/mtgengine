"use strict";
const Constants = require ("../../../Constants");
const ThunderousWrathBase = require("../setMM3/ThunderousWrath");

class ThunderousWrath extends ThunderousWrathBase {
  constructor (game) {
    super(game, "Thunderous Wrath", "Avacyn Restored", "AVR");
  }
}

module.exports = ThunderousWrath;
