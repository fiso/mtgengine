"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostlyPrisonBase = require("../setCHK/GhostlyPrison.js");

class GhostlyPrison extends GhostlyPrisonBase {
  constructor(game) {
    super(game, "Ghostly Prison", "Friday Night Magic", "pFNM");
  }
}

module.exports = GhostlyPrison;
