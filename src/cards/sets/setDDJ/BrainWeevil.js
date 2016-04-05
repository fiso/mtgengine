"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainWeevil extends UnimplementedCard {
  constructor(game) {
    super(game, "Brain Weevil", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BrainWeevil;
