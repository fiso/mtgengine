"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KinsbaileSkirmisher extends Card {
  constructor(game) {
    super(game, "Kinsbaile Skirmisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KinsbaileSkirmisher;
