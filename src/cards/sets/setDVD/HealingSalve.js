"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealingSalve extends UnimplementedCard {
  constructor (game) {
    super(game, "Healing Salve", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = HealingSalve;
