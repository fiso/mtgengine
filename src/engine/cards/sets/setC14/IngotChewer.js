"use strict";
const Constants = require ("../../../Constants");
const IngotChewerBase = require("../setCM2/IngotChewer");

class IngotChewer extends IngotChewerBase {
  constructor (game) {
    super(game, "Ingot Chewer", "Commander 2014", "C14");
  }
}

module.exports = IngotChewer;
