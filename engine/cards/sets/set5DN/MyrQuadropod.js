"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrQuadropod extends Card {
  constructor(game) {
    super(game, "Myr Quadropod", "Fifth Dawn", "5DN");
  }
}

module.exports = MyrQuadropod;
