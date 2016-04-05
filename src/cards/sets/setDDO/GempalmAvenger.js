"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Gempalm Avenger", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = GempalmAvenger;
