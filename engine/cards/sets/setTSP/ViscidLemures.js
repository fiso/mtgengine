"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViscidLemures extends UnimplementedCard {
  constructor(game) {
    super(game, "Viscid Lemures", "Time Spiral", "TSP");
  }
}

module.exports = ViscidLemures;
