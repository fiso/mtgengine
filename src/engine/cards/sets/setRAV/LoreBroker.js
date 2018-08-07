"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoreBroker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lore Broker", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LoreBroker;
