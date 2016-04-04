"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanHarvest extends Card {
  constructor(game) {
    super(game, "Shivan Harvest", "Invasion", "INV");
  }
}

module.exports = ShivanHarvest;
