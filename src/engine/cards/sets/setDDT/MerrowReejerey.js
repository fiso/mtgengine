"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerrowReejerey extends UnimplementedCard {
  constructor (game) {
    super(game, "Merrow Reejerey", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = MerrowReejerey;
