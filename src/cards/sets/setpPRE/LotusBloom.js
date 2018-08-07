"use strict";
const Constants = require ("../../../Constants");
const LotusBloomBase = require("../setMMA/LotusBloom");

class LotusBloom extends LotusBloomBase {
  constructor (game) {
    super(game, "Lotus Bloom", "Prerelease Events", "PPRE");
  }
}

module.exports = LotusBloom;
