"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesMindseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Mindseeker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesMindseeker;
