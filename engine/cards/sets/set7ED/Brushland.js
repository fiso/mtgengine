"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../setATH/Brushland");

class Brushland extends BrushlandBase {
  constructor(game) {
    super(game, "Brushland", "Seventh Edition", "7ED");
  }
}

module.exports = Brushland;
