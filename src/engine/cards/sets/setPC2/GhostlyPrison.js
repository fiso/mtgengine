"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setPCA/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Planechase 2012", "PC2");
  }
}

module.exports = GhostlyPrison;
