"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarlyHarvest extends Card {
  constructor(game) {
    super(game, "Early Harvest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = EarlyHarvest;
