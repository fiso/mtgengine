"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatecreeperVine extends UnimplementedCard {
  constructor (game) {
    super(game, "Gatecreeper Vine", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GatecreeperVine;
