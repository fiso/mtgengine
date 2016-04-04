"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariRotwurm extends Card {
  constructor(game) {
    super(game, "Golgari Rotwurm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariRotwurm;
