"use strict";
const Constants = require ("../../../Constants");
const EnchantresssPresenceBase = require("../setC18/EnchantresssPresence");

class EnchantresssPresence extends EnchantresssPresenceBase {
  constructor (game) {
    super(game, "Enchantress's Presence", "Onslaught", "ONS");
  }
}

module.exports = EnchantresssPresence;
