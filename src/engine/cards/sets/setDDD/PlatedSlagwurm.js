"use strict";
const Constants = require ("../../../Constants");
const PlatedSlagwurmBase = require("../setGVL/PlatedSlagwurm");

class PlatedSlagwurm extends PlatedSlagwurmBase {
  constructor (game) {
    super(game, "Plated Slagwurm", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = PlatedSlagwurm;
