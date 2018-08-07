"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SomberwaldVigilante extends UnimplementedCard {
  constructor (game) {
    super(game, "Somberwald Vigilante", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SomberwaldVigilante;
