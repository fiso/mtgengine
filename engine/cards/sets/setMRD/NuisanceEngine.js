"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NuisanceEngine extends Card {
  constructor(game) {
    super(game, "Nuisance Engine", "Mirrodin", "MRD");
  }
}

module.exports = NuisanceEngine;
