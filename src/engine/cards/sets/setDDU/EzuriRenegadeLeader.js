"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EzuriRenegadeLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Ezuri, Renegade Leader", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = EzuriRenegadeLeader;
