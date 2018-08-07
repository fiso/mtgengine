"use strict";
const Constants = require ("../../../Constants");
const StarstormBase = require("../setCM2/Starstorm");

class Starstorm extends StarstormBase {
  constructor (game) {
    super(game, "Starstorm", "Commander 2013", "C13");
  }
}

module.exports = Starstorm;
