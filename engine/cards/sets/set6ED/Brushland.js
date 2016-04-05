"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../setATH/Brushland");

class Brushland extends BrushlandBase {
  constructor(game) {
    super(game, "Brushland", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Brushland;
