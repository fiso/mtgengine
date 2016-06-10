"use strict";
const Constants = require ("../../../Constants");
const NaturesRuinBase = require("../setPOR/NaturesRuin");

class NaturesRuin extends NaturesRuinBase {
  constructor (game) {
    super(game, "Nature's Ruin", "Vintage Masters", "VMA");
  }
}

module.exports = NaturesRuin;
