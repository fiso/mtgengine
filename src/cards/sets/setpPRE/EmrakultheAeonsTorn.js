"use strict";
const Constants = require ("../../../Constants");
const EmrakultheAeonsTornBase = require("../setMM2/EmrakultheAeonsTorn");

class EmrakultheAeonsTorn extends EmrakultheAeonsTornBase {
  constructor (game) {
    super(game, "Emrakul, the Aeons Torn", "Prerelease Events", "pPRE");
  }
}

module.exports = EmrakultheAeonsTorn;
