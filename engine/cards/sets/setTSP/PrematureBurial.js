"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrematureBurial extends Card {
  constructor(game) {
    super(game, "Premature Burial", "Time Spiral", "TSP");
  }
}

module.exports = PrematureBurial;
