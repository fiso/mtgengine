"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantOctopusBase = require("../set8ED/GiantOctopus.js");

class GiantOctopus extends GiantOctopusBase {
  constructor(game) {
    super(game, "Giant Octopus", "Starter 1999", "S99");
  }
}

module.exports = GiantOctopus;
