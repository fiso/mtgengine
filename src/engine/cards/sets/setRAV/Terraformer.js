"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terraformer extends UnimplementedCard {
  constructor (game) {
    super(game, "Terraformer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Terraformer;
