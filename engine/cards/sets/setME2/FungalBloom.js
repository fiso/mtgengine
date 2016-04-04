"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungalBloomBase = require("../setFEM/FungalBloom.js");

class FungalBloom extends FungalBloomBase {
  constructor(game) {
    super(game, "Fungal Bloom", "Masters Edition II", "ME2");
  }
}

module.exports = FungalBloom;
