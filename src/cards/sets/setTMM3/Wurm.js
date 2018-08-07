"use strict";
const Constants = require ("../../../Constants");
const WurmBase = require("../setTCM2/Wurm");

class Wurm extends WurmBase {
  constructor (game) {
    super(game, "Wurm", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Wurm;
