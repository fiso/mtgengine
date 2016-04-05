"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedSlagwurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Plated Slagwurm", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = PlatedSlagwurm;
