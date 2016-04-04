"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceoftheWoods extends UnimplementedCard {
  constructor(game) {
    super(game, "Voice of the Woods", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = VoiceoftheWoods;
