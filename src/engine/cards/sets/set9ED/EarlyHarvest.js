"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarlyHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Early Harvest", "Ninth Edition", "9ED");
  }
}

module.exports = EarlyHarvest;
