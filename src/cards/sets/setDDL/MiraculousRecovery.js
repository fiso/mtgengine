"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiraculousRecovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Miraculous Recovery", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MiraculousRecovery;
