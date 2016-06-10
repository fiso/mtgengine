"use strict";
const Constants = require ("../../../Constants");
const GraypeltRefugeBase = require("../setARC/GraypeltRefuge");

class GraypeltRefuge extends GraypeltRefugeBase {
  constructor (game) {
    super(game, "Graypelt Refuge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GraypeltRefuge;
