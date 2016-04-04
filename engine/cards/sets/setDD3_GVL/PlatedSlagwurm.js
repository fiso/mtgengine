"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedSlagwurm extends Card {
  constructor(game) {
    super(game, "Plated Slagwurm", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = PlatedSlagwurm;
