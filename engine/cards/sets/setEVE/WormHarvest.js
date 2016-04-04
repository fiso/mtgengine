"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WormHarvest extends Card {
  constructor(game) {
    super(game, "Worm Harvest", "Eventide", "EVE");
  }
}

module.exports = WormHarvest;
