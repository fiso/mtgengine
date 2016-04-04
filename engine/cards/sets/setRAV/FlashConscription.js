"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlashConscription extends UnimplementedCard {
  constructor(game) {
    super(game, "Flash Conscription", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlashConscription;
