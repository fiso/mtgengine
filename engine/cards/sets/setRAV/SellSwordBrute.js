"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SellSwordBrute extends Card {
  constructor(game) {
    super(game, "Sell-Sword Brute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SellSwordBrute;
