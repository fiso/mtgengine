"use strict";
const Constants = require ("../../../Constants");
const NaturesLoreBase = require("../setGVL/NaturesLore");

class NaturesLore extends NaturesLoreBase {
  constructor (game) {
    super(game, "Nature's Lore", "Fifth Edition", "5ED");
  }
}

module.exports = NaturesLore;
