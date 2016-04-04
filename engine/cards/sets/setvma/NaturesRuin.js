"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesRuinBase = require("../setPOR/NaturesRuin.js");

class NaturesRuin extends NaturesRuinBase {
  constructor(game) {
    super(game, "Nature's Ruin", "Vintage Masters", "VMA");
  }
}

module.exports = NaturesRuin;
