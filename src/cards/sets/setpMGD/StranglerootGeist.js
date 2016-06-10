"use strict";
const Constants = require ("../../../Constants");
const StranglerootGeistBase = require("../setDKA/StranglerootGeist");

class StranglerootGeist extends StranglerootGeistBase {
  constructor (game) {
    super(game, "Strangleroot Geist", "Magic Game Day", "pMGD");
  }
}

module.exports = StranglerootGeist;
