"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Omenspeaker extends Card {
  constructor(game) {
    super(game, "Omenspeaker", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Omenspeaker;
