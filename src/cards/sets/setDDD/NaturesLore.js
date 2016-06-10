"use strict";
const Constants = require ("../../../Constants");
const NaturesLoreBase = require("../setDD3_GVL/NaturesLore");

class NaturesLore extends NaturesLoreBase {
  constructor (game) {
    super(game, "Nature's Lore", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = NaturesLore;
