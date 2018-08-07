"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BountifulHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Bountiful Harvest", "Magic 2013", "M13");
  }
}

module.exports = BountifulHarvest;
