"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Omenspeaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Omenspeaker", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Omenspeaker;
