"use strict";
const Constants = require ("../../../Constants");
const GolgariRotwurmBase = require("../setMM3/GolgariRotwurm");

class GolgariRotwurm extends GolgariRotwurmBase {
  constructor (game) {
    super(game, "Golgari Rotwurm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariRotwurm;
