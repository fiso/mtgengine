"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlashConscription extends Card {
  constructor(game) {
    super(game, "Flash Conscription", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlashConscription;
