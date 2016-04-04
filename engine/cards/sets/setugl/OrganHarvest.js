"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrganHarvest extends Card {
  constructor(game) {
    super(game, "Organ Harvest", "Unglued", "UGL");
  }
}

module.exports = OrganHarvest;
