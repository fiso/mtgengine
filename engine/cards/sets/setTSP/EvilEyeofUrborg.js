"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilEyeofUrborg extends UnimplementedCard {
  constructor(game) {
    super(game, "Evil Eye of Urborg", "Time Spiral", "TSP");
  }
}

module.exports = EvilEyeofUrborg;
