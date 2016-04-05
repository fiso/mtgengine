"use strict";
const Constants = require ("../../../Constants");
const SisaysRingBase = require("../set7ED/SisaysRing");

class SisaysRing extends SisaysRingBase {
  constructor(game) {
    super(game, "Sisay's Ring", "Visions", "VIS");
  }
}

module.exports = SisaysRing;
