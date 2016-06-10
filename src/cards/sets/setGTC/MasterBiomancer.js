"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterBiomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Biomancer", "Gatecrash", "GTC");
  }
}

module.exports = MasterBiomancer;
