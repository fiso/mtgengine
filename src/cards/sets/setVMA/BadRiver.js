"use strict";
const Constants = require ("../../../Constants");
const BadRiverBase = require("../setMIR/BadRiver");

class BadRiver extends BadRiverBase {
  constructor (game) {
    super(game, "Bad River", "Vintage Masters", "VMA");
  }
}

module.exports = BadRiver;
