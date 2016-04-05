"use strict";
const Constants = require ("../../../Constants");
const HowlpackAlphaBase = require("../setISD/HowlpackAlpha");

class HowlpackAlpha extends HowlpackAlphaBase {
  constructor(game) {
    super(game, "Howlpack Alpha", "Prerelease Events", "pPRE");
  }
}

module.exports = HowlpackAlpha;
