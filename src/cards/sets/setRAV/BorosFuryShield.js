"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosFuryShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Fury-Shield", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosFuryShield;
