"use strict";
const Constants = require ("../../../Constants");
const BrushstriderBase = require("../setCN2/Brushstrider");

class Brushstrider extends BrushstriderBase {
  constructor (game) {
    super(game, "Brushstrider", "Return to Ravnica", "RTR");
  }
}

module.exports = Brushstrider;
