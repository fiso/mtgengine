"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../set10E/Brushland");

class Brushland extends BrushlandBase {
  constructor (game) {
    super(game, "Brushland", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Brushland;
