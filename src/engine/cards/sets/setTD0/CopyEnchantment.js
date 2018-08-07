"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopyEnchantment extends UnimplementedCard {
  constructor (game) {
    super(game, "Copy Enchantment", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = CopyEnchantment;
