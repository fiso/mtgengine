"use strict";
const Constants = require ("../../../Constants");
const VoiceoftheWoodsBase = require("../setDD3_EVG/VoiceoftheWoods");

class VoiceoftheWoods extends VoiceoftheWoodsBase {
  constructor (game) {
    super(game, "Voice of the Woods", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = VoiceoftheWoods;
