"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesMindseeker extends Card {
  constructor(game) {
    super(game, "Jace's Mindseeker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JacesMindseeker;
