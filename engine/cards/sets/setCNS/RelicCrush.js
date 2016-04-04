"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelicCrushBase = require("../setCMD/RelicCrush.js");

class RelicCrush extends RelicCrushBase {
  constructor(game) {
    super(game, "Relic Crush", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RelicCrush;
