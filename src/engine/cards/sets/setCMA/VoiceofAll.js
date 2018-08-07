"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofAll extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of All", "Commander Anthology", "CMA");
  }
}

module.exports = VoiceofAll;
