"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirkShaman extends Card {
  constructor(game) {
    super(game, "Skirk Shaman", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkShaman;
