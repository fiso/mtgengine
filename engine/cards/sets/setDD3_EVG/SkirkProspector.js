"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirkProspector extends Card {
  constructor(game) {
    super(game, "Skirk Prospector", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkProspector;
