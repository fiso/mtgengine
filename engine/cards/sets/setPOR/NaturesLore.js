"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesLoreBase = require("../setDD3_GVL/NaturesLore.js");

class NaturesLore extends NaturesLoreBase {
  constructor(game) {
    super(game, "Nature's Lore", "Portal", "POR");
  }
}

module.exports = NaturesLore;
