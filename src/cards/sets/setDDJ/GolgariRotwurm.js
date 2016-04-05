"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariRotwurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Rotwurm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariRotwurm;
