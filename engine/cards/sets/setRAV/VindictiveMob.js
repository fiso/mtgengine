"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VindictiveMob extends UnimplementedCard {
  constructor(game) {
    super(game, "Vindictive Mob", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VindictiveMob;
