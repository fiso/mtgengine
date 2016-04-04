"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneyardWurm extends Card {
  constructor(game) {
    super(game, "Boneyard Wurm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BoneyardWurm;
