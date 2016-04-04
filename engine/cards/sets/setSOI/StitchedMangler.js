"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchedMangler extends UnimplementedCard {
  constructor(game) {
    super(game, "Stitched Mangler", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StitchedMangler;
