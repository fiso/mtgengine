"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GustcloakSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Gustcloak Sentinel", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GustcloakSentinel;
