"use strict";
const Constants = require ("../../../Constants");
const DisasterRadiusBase = require("../setC15/DisasterRadius");

class DisasterRadius extends DisasterRadiusBase {
  constructor(game) {
    super(game, "Disaster Radius", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DisasterRadius;
