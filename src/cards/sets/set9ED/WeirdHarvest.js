"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeirdHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Weird Harvest", "Ninth Edition", "9ED");
  }
}

module.exports = WeirdHarvest;
