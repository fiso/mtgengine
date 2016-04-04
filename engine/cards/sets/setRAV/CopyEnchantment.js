"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopyEnchantment extends Card {
  constructor(game) {
    super(game, "Copy Enchantment", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CopyEnchantment;
