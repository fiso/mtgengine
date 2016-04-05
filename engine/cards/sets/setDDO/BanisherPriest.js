"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanisherPriest extends UnimplementedCard {
  constructor(game) {
    super(game, "Banisher Priest", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = BanisherPriest;
