"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishPromenade extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Promenade", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishPromenade;
