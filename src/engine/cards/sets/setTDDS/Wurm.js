"use strict";
const Constants = require ("../../../Constants");
const WurmBase = require("../setTCM2/Wurm");

class Wurm extends WurmBase {
  constructor (game) {
    super(game, "Wurm", "Duel Decks: Mind vs. Might Tokens", "TDDS");
  }
}

module.exports = Wurm;
