"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../set10E/Brushland");

class Brushland extends BrushlandBase {
  constructor (game) {
    super(game, "Brushland", "Ninth Edition", "9ED");
  }
}

module.exports = Brushland;
