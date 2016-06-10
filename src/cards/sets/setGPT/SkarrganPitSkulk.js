"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkarrganPitSkulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Skarrgan Pit-Skulk", "Guildpact", "GPT");
  }
}

module.exports = SkarrganPitSkulk;
