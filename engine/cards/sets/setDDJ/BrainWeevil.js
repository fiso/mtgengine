"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrainWeevil extends Card {
  constructor(game) {
    super(game, "Brain Weevil", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BrainWeevil;
