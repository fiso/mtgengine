"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceLayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace Layer", "Planechase Anthology", "PCA");
  }
}

module.exports = FurnaceLayer;
