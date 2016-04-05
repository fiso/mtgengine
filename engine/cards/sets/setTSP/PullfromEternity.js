"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PullfromEternity extends UnimplementedCard {
  constructor(game) {
    super(game, "Pull from Eternity", "Time Spiral", "TSP");
  }
}

module.exports = PullfromEternity;
