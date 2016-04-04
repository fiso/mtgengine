"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeirdHarvest extends Card {
  constructor(game) {
    super(game, "Weird Harvest", "Ninth Edition", "9ED");
  }
}

module.exports = WeirdHarvest;
