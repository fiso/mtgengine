"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrushlandBase = require("../setATH/Brushland.js");

class Brushland extends BrushlandBase {
  constructor(game) {
    super(game, "Brushland", "Ice Age", "ICE");
  }
}

module.exports = Brushland;
