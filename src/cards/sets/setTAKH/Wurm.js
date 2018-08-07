"use strict";
const Constants = require ("../../../Constants");
const WurmBase = require("../setTCM2/Wurm");

class Wurm extends WurmBase {
  constructor (game) {
    super(game, "Wurm", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = Wurm;
