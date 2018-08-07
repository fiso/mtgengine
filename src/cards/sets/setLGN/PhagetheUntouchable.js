"use strict";
const Constants = require ("../../../Constants");
const PhagetheUntouchableBase = require("../setCNS/PhagetheUntouchable");

class PhagetheUntouchable extends PhagetheUntouchableBase {
  constructor (game) {
    super(game, "Phage the Untouchable", "Legions", "LGN");
  }
}

module.exports = PhagetheUntouchable;
