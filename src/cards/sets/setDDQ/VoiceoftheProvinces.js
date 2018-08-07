"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceoftheProvinces extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of the Provinces", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VoiceoftheProvinces;
