"use strict";
const Constants = require ("../../../Constants");
const NaturesLoreBase = require("../setGVL/NaturesLore");

class NaturesLore extends NaturesLoreBase {
  constructor (game) {
    super(game, "Nature's Lore", "Masters Edition", "MED");
  }
}

module.exports = NaturesLore;
