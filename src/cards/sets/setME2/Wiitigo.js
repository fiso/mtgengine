"use strict";
const Constants = require ("../../../Constants");
const WiitigoBase = require("../setICE/Wiitigo");

class Wiitigo extends WiitigoBase {
  constructor (game) {
    super(game, "Wiitigo", "Masters Edition II", "ME2");
  }
}

module.exports = Wiitigo;
