"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoalStokerBase = require("../setDDK/CoalStoker.js");

class CoalStoker extends CoalStokerBase {
  constructor(game) {
    super(game, "Coal Stoker", "Time Spiral", "TSP");
  }
}

module.exports = CoalStoker;
