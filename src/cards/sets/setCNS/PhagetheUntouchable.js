"use strict";
const Constants = require ("../../../Constants");
const PhagetheUntouchableBase = require("../setLGN/PhagetheUntouchable");

class PhagetheUntouchable extends PhagetheUntouchableBase {
  constructor (game) {
    super(game, "Phage the Untouchable", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PhagetheUntouchable;
