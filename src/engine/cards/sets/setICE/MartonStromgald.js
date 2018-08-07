"use strict";
const Constants = require ("../../../Constants");
const MartonStromgaldBase = require("../setMED/MartonStromgald");

class MartonStromgald extends MartonStromgaldBase {
  constructor (game) {
    super(game, "Márton Stromgald", "Ice Age", "ICE");
  }
}

module.exports = MartonStromgald;
