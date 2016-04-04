"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormfrontRidersBase = require("../setDDF/StormfrontRiders.js");

class StormfrontRiders extends StormfrontRidersBase {
  constructor(game) {
    super(game, "Stormfront Riders", "Planar Chaos", "PLC");
  }
}

module.exports = StormfrontRiders;
