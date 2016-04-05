"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageofEpityr extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage of Epityr", "Time Spiral", "TSP");
  }
}

module.exports = SageofEpityr;
