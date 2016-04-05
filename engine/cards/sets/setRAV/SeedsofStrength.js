"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedsofStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Seeds of Strength", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeedsofStrength;
