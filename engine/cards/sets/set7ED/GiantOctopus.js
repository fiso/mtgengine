"use strict";
const Constants = require ("../../../Constants");
const GiantOctopusBase = require("../set8ED/GiantOctopus");

class GiantOctopus extends GiantOctopusBase {
  constructor(game) {
    super(game, "Giant Octopus", "Seventh Edition", "7ED");
  }
}

module.exports = GiantOctopus;
