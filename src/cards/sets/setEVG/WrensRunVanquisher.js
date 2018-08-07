"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrensRunVanquisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Wren's Run Vanquisher", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = WrensRunVanquisher;
