"use strict";
const Constants = require ("../../../Constants");
const RuinRaiderBase = require("../setXLN/RuinRaider");

class RuinRaider extends RuinRaiderBase {
  constructor (game) {
    super(game, "Ruin Raider", "Ixalan Promos", "PXLN");
  }
}

module.exports = RuinRaider;
