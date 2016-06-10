"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathHoodCobra extends UnimplementedCard {
  constructor (game) {
    super(game, "Death-Hood Cobra", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DeathHoodCobra;
