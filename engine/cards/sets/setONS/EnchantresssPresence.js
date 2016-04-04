"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnchantresssPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Enchantress's Presence", "Onslaught", "ONS");
  }
}

module.exports = EnchantresssPresence;
