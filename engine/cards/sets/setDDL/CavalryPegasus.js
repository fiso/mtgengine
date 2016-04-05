"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavalryPegasus extends UnimplementedCard {
  constructor(game) {
    super(game, "Cavalry Pegasus", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CavalryPegasus;
