"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ActofTreason extends Card {
  constructor(game) {
    super(game, "Act of Treason", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ActofTreason;
