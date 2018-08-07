"use strict";
const Constants = require ("../../../Constants");
const SkarrganPitSkulkBase = require("../setDDS/SkarrganPitSkulk");

class SkarrganPitSkulk extends SkarrganPitSkulkBase {
  constructor (game) {
    super(game, "Skarrgan Pit-Skulk", "Guildpact", "GPT");
  }
}

module.exports = SkarrganPitSkulk;
