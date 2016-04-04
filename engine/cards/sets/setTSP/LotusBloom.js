"use strict";
const Constants = require ("../../../Constants");
const LotusBloomBase = require("../setMMA/LotusBloom");

class LotusBloom extends LotusBloomBase {
  constructor(game) {
    super(game, "Lotus Bloom", "Time Spiral", "TSP");
  }
}

module.exports = LotusBloom;
