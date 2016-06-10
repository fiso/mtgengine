"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadOutpost extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomad Outpost", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = NomadOutpost;
