"use strict";
const Constants = require ("../../../Constants");
const GiantOctopusBase = require("../set8ED/GiantOctopus");

class GiantOctopus extends GiantOctopusBase {
  constructor(game) {
    super(game, "Giant Octopus", "Starter 2000", "S00");
  }
}

module.exports = GiantOctopus;
