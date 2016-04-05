"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActofTreason extends UnimplementedCard {
  constructor(game) {
    super(game, "Act of Treason", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ActofTreason;
