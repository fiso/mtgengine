"use strict";
const Constants = require ("../../../Constants");
const NaturesRuinBase = require("../setVMA/NaturesRuin");

class NaturesRuin extends NaturesRuinBase {
  constructor (game) {
    super(game, "Nature's Ruin", "Portal", "POR");
  }
}

module.exports = NaturesRuin;
