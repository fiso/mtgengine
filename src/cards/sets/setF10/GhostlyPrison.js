"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setPCA/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Friday Night Magic 2010", "F10");
  }
}

module.exports = GhostlyPrison;
