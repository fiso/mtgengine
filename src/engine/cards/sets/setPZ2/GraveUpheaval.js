"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveUpheaval extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Upheaval", "You Make the Cube", "PZ2");
  }
}

module.exports = GraveUpheaval;
