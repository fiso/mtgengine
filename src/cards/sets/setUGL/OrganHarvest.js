"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrganHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Organ Harvest", "Unglued", "UGL");
  }
}

module.exports = OrganHarvest;
