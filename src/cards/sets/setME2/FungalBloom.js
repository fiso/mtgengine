"use strict";
const Constants = require ("../../../Constants");
const FungalBloomBase = require("../setFEM/FungalBloom");

class FungalBloom extends FungalBloomBase {
  constructor(game) {
    super(game, "Fungal Bloom", "Masters Edition II", "ME2");
  }
}

module.exports = FungalBloom;
