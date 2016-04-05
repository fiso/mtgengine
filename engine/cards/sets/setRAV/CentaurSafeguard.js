"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurSafeguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Safeguard", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CentaurSafeguard;
