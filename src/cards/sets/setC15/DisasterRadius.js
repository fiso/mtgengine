"use strict";
const Constants = require ("../../../Constants");
const DisasterRadiusBase = require("../setCM2/DisasterRadius");

class DisasterRadius extends DisasterRadiusBase {
  constructor (game) {
    super(game, "Disaster Radius", "Commander 2015", "C15");
  }
}

module.exports = DisasterRadius;
