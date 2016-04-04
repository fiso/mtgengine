"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarrelsMantle extends UnimplementedCard {
  constructor(game) {
    super(game, "Farrel's Mantle", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelsMantle;
