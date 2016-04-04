"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishCannonade extends Card {
  constructor(game) {
    super(game, "Orcish Cannonade", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OrcishCannonade;
