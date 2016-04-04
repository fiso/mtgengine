"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterBiomancer extends Card {
  constructor(game) {
    super(game, "Master Biomancer", "Gatecrash", "GTC");
  }
}

module.exports = MasterBiomancer;
