"use strict";
const Constants = require ("../../../Constants");
const SkarrganSkybreakerBase = require("../setDDL/SkarrganSkybreaker");

class SkarrganSkybreaker extends SkarrganSkybreakerBase {
  constructor (game) {
    super(game, "Skarrgan Skybreaker", "Guildpact", "GPT");
  }
}

module.exports = SkarrganSkybreaker;
