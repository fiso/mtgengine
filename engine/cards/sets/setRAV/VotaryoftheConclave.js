"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VotaryoftheConclave extends Card {
  constructor(game) {
    super(game, "Votary of the Conclave", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VotaryoftheConclave;
