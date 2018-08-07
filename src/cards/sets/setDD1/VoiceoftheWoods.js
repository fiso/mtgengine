"use strict";
const Constants = require ("../../../Constants");
const VoiceoftheWoodsBase = require("../setEVG/VoiceoftheWoods");

class VoiceoftheWoods extends VoiceoftheWoodsBase {
  constructor (game) {
    super(game, "Voice of the Woods", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = VoiceoftheWoods;
