"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeusofCalamity extends UnimplementedCard {
  constructor (game) {
    super(game, "Deus of Calamity", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DeusofCalamity;
