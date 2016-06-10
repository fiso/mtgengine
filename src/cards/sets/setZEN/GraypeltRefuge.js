"use strict";
const Constants = require ("../../../Constants");
const GraypeltRefugeBase = require("../setARC/GraypeltRefuge");

class GraypeltRefuge extends GraypeltRefugeBase {
  constructor (game) {
    super(game, "Graypelt Refuge", "Zendikar", "ZEN");
  }
}

module.exports = GraypeltRefuge;
