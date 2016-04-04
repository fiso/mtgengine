"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViridianHarvest extends Card {
  constructor(game) {
    super(game, "Viridian Harvest", "New Phyrexia", "NPH");
  }
}

module.exports = ViridianHarvest;
