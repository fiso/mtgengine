"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceHarvest extends Card {
  constructor(game) {
    super(game, "Essence Harvest", "Avacyn Restored", "AVR");
  }
}

module.exports = EssenceHarvest;
