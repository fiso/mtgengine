"use strict";
const Constants = require ("../../../Constants");
const MartonStromgaldBase = require("../setICE/MartonStromgald");

class MartonStromgald extends MartonStromgaldBase {
  constructor(game) {
    super(game, "Márton Stromgald", "Masters Edition", "MED");
  }
}

module.exports = MartonStromgald;
