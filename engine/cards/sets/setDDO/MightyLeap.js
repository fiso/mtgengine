"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightyLeap extends UnimplementedCard {
  constructor(game) {
    super(game, "Mighty Leap", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MightyLeap;
