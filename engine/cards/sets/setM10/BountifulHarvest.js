"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BountifulHarvest extends Card {
  constructor(game) {
    super(game, "Bountiful Harvest", "Magic 2010", "M10");
  }
}

module.exports = BountifulHarvest;
