"use strict";
const Constants = require ("../../../Constants");
const GhostlyPrisonBase = require("../setCHK/GhostlyPrison");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor (game) {
    super(game, "Ghostly Prison", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GhostlyPrison;
