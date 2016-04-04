"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceoftheWoods extends Card {
  constructor(game) {
    super(game, "Voice of the Woods", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = VoiceoftheWoods;
