"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsHorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon's Horn", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = DemonsHorn;
