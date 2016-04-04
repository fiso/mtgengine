"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantOctopus extends Card {
  constructor(game) {
    super(game, "Giant Octopus", "Eighth Edition", "8ED");
  }
}

module.exports = GiantOctopus;
