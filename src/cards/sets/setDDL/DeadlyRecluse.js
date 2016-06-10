"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyRecluse extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Recluse", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DeadlyRecluse;
