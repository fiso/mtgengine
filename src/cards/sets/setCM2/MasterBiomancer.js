"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterBiomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Biomancer", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MasterBiomancer;
