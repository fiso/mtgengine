"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SellSwordBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Sell-Sword Brute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SellSwordBrute;
