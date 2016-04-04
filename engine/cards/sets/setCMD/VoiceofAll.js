"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceofAll extends Card {
  constructor(game) {
    super(game, "Voice of All", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VoiceofAll;
