"use strict";
const Constants = require ("../../../Constants");
const DouseinGloomBase = require("../setFRF/DouseinGloom");

class DouseinGloom extends DouseinGloomBase {
  constructor(game) {
    super(game, "Douse in Gloom", "Guildpact", "GPT");
  }
}

module.exports = DouseinGloom;
