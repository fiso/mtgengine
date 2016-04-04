"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceFracture extends UnimplementedCard {
  constructor(game) {
    super(game, "Essence Fracture", "Onslaught", "ONS");
  }
}

module.exports = EssenceFracture;
