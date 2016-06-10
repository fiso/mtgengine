"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarlyHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Early Harvest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EarlyHarvest;
