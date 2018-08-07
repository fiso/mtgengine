"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarrelsMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Farrel's Mantle", "Masters Edition II", "ME2");
  }
}

module.exports = FarrelsMantle;
