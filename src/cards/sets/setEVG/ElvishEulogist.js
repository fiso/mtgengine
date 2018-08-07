"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishEulogist extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Eulogist", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishEulogist;
