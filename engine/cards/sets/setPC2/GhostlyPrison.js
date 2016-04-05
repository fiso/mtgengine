"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setCHK/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor(game) {
    super(game, "Ghostly Prison", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GhostlyPrison;
