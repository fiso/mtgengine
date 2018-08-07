"use strict";
const Constants = require ("../../../Constants");
const FurnaceLayerBase = require("../setPCA/FurnaceLayer");

class FurnaceLayer extends FurnaceLayerBase {
  constructor (game) {
    super(game, "Furnace Layer", "Planechase 2012", "PC2");
  }
}

module.exports = FurnaceLayer;
