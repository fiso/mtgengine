"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FranticSalvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Frantic Salvage", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FranticSalvage;
