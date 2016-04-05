"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalHarvest extends UnimplementedCard {
  constructor(game) {
    super(game, "Infernal Harvest", "Visions", "VIS");
  }
}

module.exports = InfernalHarvest;
