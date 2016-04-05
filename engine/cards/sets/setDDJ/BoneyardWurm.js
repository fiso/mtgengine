"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneyardWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Boneyard Wurm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BoneyardWurm;
