"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../setATH/Brushland");

class Brushland extends BrushlandBase {
  constructor(game) {
    super(game, "Brushland", "Ninth Edition", "9ED");
  }
}

module.exports = Brushland;
