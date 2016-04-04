"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StranglerootGeistBase = require("../setDKA/StranglerootGeist.js");

class StranglerootGeist extends StranglerootGeistBase {
  constructor(game) {
    super(game, "Strangleroot Geist", "Magic Game Day", "pMGD");
  }
}

module.exports = StranglerootGeist;
