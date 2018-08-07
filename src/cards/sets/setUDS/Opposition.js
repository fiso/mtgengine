"use strict";
const Constants = require ("../../../Constants");
const OppositionBase = require("../setMP2/Opposition");

class Opposition extends OppositionBase {
  constructor (game) {
    super(game, "Opposition", "Urza's Destiny", "UDS");
  }
}

module.exports = Opposition;
