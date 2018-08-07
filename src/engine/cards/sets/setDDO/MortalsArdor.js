"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortalsArdor extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortal's Ardor", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MortalsArdor;
