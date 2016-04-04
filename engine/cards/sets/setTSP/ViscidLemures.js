"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViscidLemures extends Card {
  constructor(game) {
    super(game, "Viscid Lemures", "Time Spiral", "TSP");
  }
}

module.exports = ViscidLemures;
