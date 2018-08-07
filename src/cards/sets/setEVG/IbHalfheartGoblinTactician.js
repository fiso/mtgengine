"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IbHalfheartGoblinTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Ib Halfheart, Goblin Tactician", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = IbHalfheartGoblinTactician;
