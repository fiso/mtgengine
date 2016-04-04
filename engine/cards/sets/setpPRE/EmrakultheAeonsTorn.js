"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmrakultheAeonsTornBase = require("../setMM2/EmrakultheAeonsTorn.js");

class EmrakultheAeonsTorn extends EmrakultheAeonsTornBase {
  constructor(game) {
    super(game, "Emrakul, the Aeons Torn", "Prerelease Events", "pPRE");
  }
}

module.exports = EmrakultheAeonsTorn;
