"use strict";
const Constants = require ("../../../Constants");
const FungalBloomBase = require("../setME2/FungalBloom");

class FungalBloom extends FungalBloomBase {
  constructor (game) {
    super(game, "Fungal Bloom", "Fallen Empires", "FEM");
  }
}

module.exports = FungalBloom;
