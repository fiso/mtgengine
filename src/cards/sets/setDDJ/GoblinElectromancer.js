"use strict";
const Constants = require ("../../../Constants");
const GoblinElectromancerBase = require("../setDDS/GoblinElectromancer");

class GoblinElectromancer extends GoblinElectromancerBase {
  constructor (game) {
    super(game, "Goblin Electromancer", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GoblinElectromancer;
