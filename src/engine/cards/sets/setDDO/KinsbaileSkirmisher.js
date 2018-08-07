"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KinsbaileSkirmisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Kinsbaile Skirmisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KinsbaileSkirmisher;
