"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NearDeathExperience extends UnimplementedCard {
  constructor (game) {
    super(game, "Near-Death Experience", "From the Vault: Lore", "V16");
  }
}

module.exports = NearDeathExperience;
