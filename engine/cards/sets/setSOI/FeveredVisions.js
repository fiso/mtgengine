"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeveredVisions extends UnimplementedCard {
  constructor(game) {
    super(game, "Fevered Visions", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FeveredVisions;
