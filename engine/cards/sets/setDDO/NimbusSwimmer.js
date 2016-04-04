"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimbusSwimmer extends Card {
  constructor(game) {
    super(game, "Nimbus Swimmer", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NimbusSwimmer;
