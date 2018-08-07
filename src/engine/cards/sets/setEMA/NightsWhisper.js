"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightsWhisper extends UnimplementedCard {
  constructor (game) {
    super(game, "Night's Whisper", "Eternal Masters", "EMA");
  }
}

module.exports = NightsWhisper;
