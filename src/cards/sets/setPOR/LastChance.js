"use strict";
const Constants = require ("../../../Constants");
const LastChanceBase = require("../setME4/LastChance");

class LastChance extends LastChanceBase {
  constructor(game) {
    super(game, "Last Chance", "Portal", "POR");
  }
}

module.exports = LastChance;
