"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Burst Lightning", "Modern Masters 2015", "MM2");
  }
}

module.exports = BurstLightning;
