"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrushlandBase = require("../setATH/Brushland.js");

class Brushland extends BrushlandBase {
  constructor(game) {
    super(game, "Brushland", "Seventh Edition", "7ED");
  }
}

module.exports = Brushland;
