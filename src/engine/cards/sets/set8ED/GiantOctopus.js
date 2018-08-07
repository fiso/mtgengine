"use strict";
const Constants = require ("../../../Constants");
const GiantOctopusBase = require("../set9ED/GiantOctopus");

class GiantOctopus extends GiantOctopusBase {
  constructor (game) {
    super(game, "Giant Octopus", "Eighth Edition", "8ED");
  }
}

module.exports = GiantOctopus;
