"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessOnslaught extends UnimplementedCard {
  constructor(game) {
    super(game, "Dauntless Onslaught", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = DauntlessOnslaught;
