"use strict";
const Constants = require ("../../../Constants");
const VoiceoftheWoodsBase = require("../setDD3_EVG/VoiceoftheWoods");

class VoiceoftheWoods extends VoiceoftheWoodsBase {
  constructor (game) {
    super(game, "Voice of the Woods", "Onslaught", "ONS");
  }
}

module.exports = VoiceoftheWoods;
