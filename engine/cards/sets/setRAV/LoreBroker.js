"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoreBroker extends Card {
  constructor(game) {
    super(game, "Lore Broker", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LoreBroker;
