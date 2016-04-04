"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarrelsMantle extends Card {
  constructor(game) {
    super(game, "Farrel's Mantle", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelsMantle;
