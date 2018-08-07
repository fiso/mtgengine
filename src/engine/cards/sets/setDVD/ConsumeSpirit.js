"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumeSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Consume Spirit", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = ConsumeSpirit;
