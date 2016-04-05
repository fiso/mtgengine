"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soldier extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldier", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Soldier;
