"use strict";
const Constants = require ("../../../Constants");
const DaggerclawImpBase = require("../setDD3_DVD/DaggerclawImp");

class DaggerclawImp extends DaggerclawImpBase {
  constructor(game) {
    super(game, "Daggerclaw Imp", "Guildpact", "GPT");
  }
}

module.exports = DaggerclawImp;
