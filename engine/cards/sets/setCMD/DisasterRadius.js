"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisasterRadiusBase = require("../setC15/DisasterRadius.js");

class DisasterRadius extends DisasterRadiusBase {
  constructor(game) {
    super(game, "Disaster Radius", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DisasterRadius;
