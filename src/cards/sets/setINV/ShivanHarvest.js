"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanHarvest extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Harvest", "Invasion", "INV");
  }
}

module.exports = ShivanHarvest;
