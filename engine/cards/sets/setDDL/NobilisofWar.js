"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NobilisofWar extends Card {
  constructor(game) {
    super(game, "Nobilis of War", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = NobilisofWar;
