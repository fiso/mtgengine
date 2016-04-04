"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkarrganSkybreakerBase = require("../setDDL/SkarrganSkybreaker.js");

class SkarrganSkybreaker extends SkarrganSkybreakerBase {
  constructor(game) {
    super(game, "Skarrgan Skybreaker", "Guildpact", "GPT");
  }
}

module.exports = SkarrganSkybreaker;
