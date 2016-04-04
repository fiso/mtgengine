"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadowAlleyDenizen extends Card {
  constructor(game) {
    super(game, "Shadow Alley Denizen", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ShadowAlleyDenizen;
