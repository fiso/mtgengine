"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeoftheStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye of the Storm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EyeoftheStorm;
