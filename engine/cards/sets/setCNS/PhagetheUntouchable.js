"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhagetheUntouchableBase = require("../setLGN/PhagetheUntouchable.js");

class PhagetheUntouchable extends PhagetheUntouchableBase {
  constructor(game) {
    super(game, "Phage the Untouchable", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PhagetheUntouchable;
