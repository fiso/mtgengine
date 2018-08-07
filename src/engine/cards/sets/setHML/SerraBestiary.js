"use strict";
const Constants = require ("../../../Constants");
const SerraBestiaryBase = require("../setME4/SerraBestiary");

class SerraBestiary extends SerraBestiaryBase {
  constructor (game) {
    super(game, "Serra Bestiary", "Homelands", "HML");
  }
}

module.exports = SerraBestiary;
