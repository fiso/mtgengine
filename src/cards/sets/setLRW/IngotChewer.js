"use strict";
const Constants = require ("../../../Constants");
const IngotChewerBase = require("../setCM2/IngotChewer");

class IngotChewer extends IngotChewerBase {
  constructor (game) {
    super(game, "Ingot Chewer", "Lorwyn", "LRW");
  }
}

module.exports = IngotChewer;
