"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraGraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Graft", "Odyssey", "ODY");
  }
}

module.exports = AuraGraft;
