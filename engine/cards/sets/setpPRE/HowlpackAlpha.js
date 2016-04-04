"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlpackAlphaBase = require("../setISD/HowlpackAlpha.js");

class HowlpackAlpha extends HowlpackAlphaBase {
  constructor(game) {
    super(game, "Howlpack Alpha", "Prerelease Events", "pPRE");
  }
}

module.exports = HowlpackAlpha;
