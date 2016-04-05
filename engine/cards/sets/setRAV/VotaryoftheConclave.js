"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VotaryoftheConclave extends UnimplementedCard {
  constructor(game) {
    super(game, "Votary of the Conclave", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VotaryoftheConclave;
