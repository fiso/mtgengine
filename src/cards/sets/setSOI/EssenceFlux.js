"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceFlux extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Flux", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EssenceFlux;
