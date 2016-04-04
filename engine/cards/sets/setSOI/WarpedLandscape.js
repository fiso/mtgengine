"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpedLandscape extends UnimplementedCard {
  constructor(game) {
    super(game, "Warped Landscape", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WarpedLandscape;
