"use strict";
const Constants = require ("../../../Constants");
const SerraBestiaryBase = require("../set5ED/SerraBestiary");

class SerraBestiary extends SerraBestiaryBase {
  constructor (game) {
    super(game, "Serra Bestiary", "Homelands", "HML");
  }
}

module.exports = SerraBestiary;
