"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowAlleyDenizen extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadow Alley Denizen", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ShadowAlleyDenizen;
