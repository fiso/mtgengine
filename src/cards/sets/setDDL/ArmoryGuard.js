"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoryGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Armory Guard", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ArmoryGuard;
