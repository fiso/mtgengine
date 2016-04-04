"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GustcloakSentinel extends Card {
  constructor(game) {
    super(game, "Gustcloak Sentinel", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GustcloakSentinel;
