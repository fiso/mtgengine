"use strict";
const Constants = require ("../../../Constants");
const RelicCrushBase = require("../setCM2/RelicCrush");

class RelicCrush extends RelicCrushBase {
  constructor (game) {
    super(game, "Relic Crush", "Conspiracy", "CNS");
  }
}

module.exports = RelicCrush;
