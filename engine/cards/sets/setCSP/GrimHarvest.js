"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimHarvest extends Card {
  constructor(game) {
    super(game, "Grim Harvest", "Coldsnap", "CSP");
  }
}

module.exports = GrimHarvest;
