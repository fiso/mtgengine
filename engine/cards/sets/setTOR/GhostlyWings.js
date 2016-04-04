"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostlyWingsBase = require("../setSOI/GhostlyWings.js");

class GhostlyWings extends GhostlyWingsBase {
  constructor(game) {
    super(game, "Ghostly Wings", "Torment", "TOR");
  }
}

module.exports = GhostlyWings;
