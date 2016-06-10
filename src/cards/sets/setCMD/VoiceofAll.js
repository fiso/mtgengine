"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofAll extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of All", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VoiceofAll;
