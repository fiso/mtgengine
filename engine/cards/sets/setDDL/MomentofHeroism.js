"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MomentofHeroism extends Card {
  constructor(game) {
    super(game, "Moment of Heroism", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MomentofHeroism;
