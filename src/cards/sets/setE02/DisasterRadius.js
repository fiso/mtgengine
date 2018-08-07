"use strict";
const Constants = require ("../../../Constants");
const DisasterRadiusBase = require("../setCM2/DisasterRadius");

class DisasterRadius extends DisasterRadiusBase {
  constructor (game) {
    super(game, "Disaster Radius", "Explorers of Ixalan", "E02");
  }
}

module.exports = DisasterRadius;
