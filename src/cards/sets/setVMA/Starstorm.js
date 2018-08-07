"use strict";
const Constants = require ("../../../Constants");
const StarstormBase = require("../setCM2/Starstorm");

class Starstorm extends StarstormBase {
  constructor (game) {
    super(game, "Starstorm", "Vintage Masters", "VMA");
  }
}

module.exports = Starstorm;
