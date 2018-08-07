"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BotanicalSanctum extends UnimplementedCard {
  constructor (game) {
    super(game, "Botanical Sanctum", "Kaladesh", "KLD");
  }
}

module.exports = BotanicalSanctum;
