"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicSubmersion extends Card {
  constructor(game) {
    super(game, "Volcanic Submersion", "Shards of Alara", "ALA");
  }
}

module.exports = VolcanicSubmersion;
