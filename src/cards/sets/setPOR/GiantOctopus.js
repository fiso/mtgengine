"use strict";
const Constants = require ("../../../Constants");
const GiantOctopusBase = require("../set9ED/GiantOctopus");

class GiantOctopus extends GiantOctopusBase {
  constructor (game) {
    super(game, "Giant Octopus", "Portal", "POR");
  }
}

module.exports = GiantOctopus;
