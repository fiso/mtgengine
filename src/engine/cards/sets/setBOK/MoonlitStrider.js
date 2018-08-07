"use strict";
const Constants = require ("../../../Constants");
const MoonlitStriderBase = require("../setMM2/MoonlitStrider");

class MoonlitStrider extends MoonlitStriderBase {
  constructor (game) {
    super(game, "Moonlit Strider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MoonlitStrider;
