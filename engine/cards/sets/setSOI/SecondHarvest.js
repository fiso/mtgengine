"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecondHarvest extends Card {
  constructor(game) {
    super(game, "Second Harvest", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SecondHarvest;
