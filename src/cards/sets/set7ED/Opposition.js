"use strict";
const Constants = require ("../../../Constants");
const OppositionBase = require("../setMP2/Opposition");

class Opposition extends OppositionBase {
  constructor (game) {
    super(game, "Opposition", "Seventh Edition", "7ED");
  }
}

module.exports = Opposition;
