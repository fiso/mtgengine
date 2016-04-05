"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Stalker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DreamStalker;
