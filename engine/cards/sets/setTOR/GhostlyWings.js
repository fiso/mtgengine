"use strict";
const Constants = require ("../../../Constants");
const GhostlyWingsBase = require("../setSOI/GhostlyWings");

class GhostlyWings extends GhostlyWingsBase {
  constructor(game) {
    super(game, "Ghostly Wings", "Torment", "TOR");
  }
}

module.exports = GhostlyWings;
