"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobilisofWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Nobilis of War", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = NobilisofWar;
