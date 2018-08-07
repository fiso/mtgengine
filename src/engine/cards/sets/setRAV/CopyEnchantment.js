"use strict";
const Constants = require ("../../../Constants");
const CopyEnchantmentBase = require("../setTD0/CopyEnchantment");

class CopyEnchantment extends CopyEnchantmentBase {
  constructor (game) {
    super(game, "Copy Enchantment", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CopyEnchantment;
