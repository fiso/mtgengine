"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartShenanigans extends UnimplementedCard {
  constructor (game) {
    super(game, "Boggart Shenanigans", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = BoggartShenanigans;
