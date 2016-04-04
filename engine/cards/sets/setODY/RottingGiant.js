"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottingGiant extends Card {
  constructor(game) {
    super(game, "Rotting Giant", "Odyssey", "ODY");
  }
}

module.exports = RottingGiant;
