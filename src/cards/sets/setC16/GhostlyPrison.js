"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setPCA/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Commander 2016", "C16");
  }
}

module.exports = GhostlyPrison;
