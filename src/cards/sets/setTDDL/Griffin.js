"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Griffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin", "Duel Decks: Heroes vs. Monsters Tokens", "TDDL");
  }
}

module.exports = Griffin;
