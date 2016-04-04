"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofDeceit extends Card {
  constructor(game) {
    super(game, "Wall of Deceit", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = WallofDeceit;
