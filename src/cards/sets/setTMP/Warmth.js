"use strict";
const Constants = require ("../../../Constants");
const WarmthBase = require("../set6ED/Warmth");

class Warmth extends WarmthBase {
  constructor(game) {
    super(game, "Warmth", "Tempest", "TMP");
  }
}

module.exports = Warmth;
