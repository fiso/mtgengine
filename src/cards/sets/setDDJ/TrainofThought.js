"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainofThought extends UnimplementedCard {
  constructor(game) {
    super(game, "Train of Thought", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = TrainofThought;
