"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulOrchard extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Orchard", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FoulOrchard;
