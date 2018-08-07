"use strict";
const Constants = require ("../../../Constants");
const StarstormBase = require("../setCM2/Starstorm");

class Starstorm extends StarstormBase {
  constructor (game) {
    super(game, "Starstorm", "Commander 2014", "C14");
  }
}

module.exports = Starstorm;
