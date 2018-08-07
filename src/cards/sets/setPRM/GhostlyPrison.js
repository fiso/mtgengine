"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setPCA/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Magic Online Promos", "PRM");
  }
}

module.exports = GhostlyPrison;
