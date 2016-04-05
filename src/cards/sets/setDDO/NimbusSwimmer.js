"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbusSwimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Nimbus Swimmer", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NimbusSwimmer;
