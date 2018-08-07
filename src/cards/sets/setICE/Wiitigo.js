"use strict";
const Constants = require ("../../../Constants");
const WiitigoBase = require("../setME2/Wiitigo");

class Wiitigo extends WiitigoBase {
  constructor (game) {
    super(game, "Wiitigo", "Ice Age", "ICE");
  }
}

module.exports = Wiitigo;
