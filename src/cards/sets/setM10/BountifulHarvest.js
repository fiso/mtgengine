"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BountifulHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Bountiful Harvest", "Magic 2010", "M10");
  }
}

module.exports = BountifulHarvest;
