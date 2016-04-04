"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggWarMarshal extends Card {
  constructor(game) {
    super(game, "Mogg War Marshal", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = MoggWarMarshal;
