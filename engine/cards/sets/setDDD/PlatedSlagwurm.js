"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatedSlagwurmBase = require("../setDD3_GVL/PlatedSlagwurm.js");

class PlatedSlagwurm extends PlatedSlagwurmBase {
  constructor(game) {
    super(game, "Plated Slagwurm", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = PlatedSlagwurm;
