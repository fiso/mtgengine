"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Charm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetCharm;
