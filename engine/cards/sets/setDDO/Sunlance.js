"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunlance extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunlance", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Sunlance;
