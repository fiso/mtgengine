"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockHydra extends Card {
  constructor(game) {
    super(game, "Rock Hydra", "Collector's Edition", "CED");
  }
}

module.exports = RockHydra;
