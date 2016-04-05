"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneshakerShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Stoneshaker Shaman", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StoneshakerShaman;
