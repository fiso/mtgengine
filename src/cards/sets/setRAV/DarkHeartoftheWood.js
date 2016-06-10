"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkHeartoftheWood extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Heart of the Wood", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DarkHeartoftheWood;
