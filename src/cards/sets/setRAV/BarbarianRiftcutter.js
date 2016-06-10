"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbarianRiftcutter extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbarian Riftcutter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BarbarianRiftcutter;
