"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuddletheMixture extends UnimplementedCard {
  constructor (game) {
    super(game, "Muddle the Mixture", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MuddletheMixture;
