"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishBranchbender extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Branchbender", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ElvishBranchbender;
