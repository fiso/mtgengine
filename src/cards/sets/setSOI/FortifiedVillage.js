"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortifiedVillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortified Village", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FortifiedVillage;
