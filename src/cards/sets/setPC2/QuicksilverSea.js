"use strict";
const Constants = require ("../../../Constants");
const QuicksilverSeaBase = require("../setPCA/QuicksilverSea");

class QuicksilverSea extends QuicksilverSeaBase {
  constructor (game) {
    super(game, "Quicksilver Sea", "Planechase 2012", "PC2");
  }
}

module.exports = QuicksilverSea;
