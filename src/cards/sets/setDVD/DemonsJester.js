"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsJester extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon's Jester", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = DemonsJester;
