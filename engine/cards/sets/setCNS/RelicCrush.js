"use strict";
const Constants = require ("../../../Constants");
const RelicCrushBase = require("../setCMD/RelicCrush");

class RelicCrush extends RelicCrushBase {
  constructor(game) {
    super(game, "Relic Crush", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RelicCrush;
