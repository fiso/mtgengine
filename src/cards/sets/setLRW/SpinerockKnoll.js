"use strict";
const Constants = require ("../../../Constants");
const SpinerockKnollBase = require("../setC16/SpinerockKnoll");

class SpinerockKnoll extends SpinerockKnollBase {
  constructor (game) {
    super(game, "Spinerock Knoll", "Lorwyn", "LRW");
  }
}

module.exports = SpinerockKnoll;
