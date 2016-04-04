"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishCannonade extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Cannonade", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OrcishCannonade;
