"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceHarvest extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Harvest", "Avacyn Restored", "AVR");
  }
}

module.exports = EssenceHarvest;
