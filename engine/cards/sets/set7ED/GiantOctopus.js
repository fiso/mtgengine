"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantOctopusBase = require("../set8ED/GiantOctopus.js");

class GiantOctopus extends GiantOctopusBase {
  constructor(game) {
    super(game, "Giant Octopus", "Seventh Edition", "7ED");
  }
}

module.exports = GiantOctopus;
