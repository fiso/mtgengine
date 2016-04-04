"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoebringerDemon extends UnimplementedCard {
  constructor(game) {
    super(game, "Woebringer Demon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WoebringerDemon;
