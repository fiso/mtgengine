"use strict";
const Constants = require ("../../../Constants");
const AwakenedAmalgamBase = require("../setPRIX/AwakenedAmalgam");

class AwakenedAmalgam extends AwakenedAmalgamBase {
  constructor (game) {
    super(game, "Awakened Amalgam", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AwakenedAmalgam;
