"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LastChanceBase = require("../setME4/LastChance.js");

class LastChance extends LastChanceBase {
  constructor(game) {
    super(game, "Last Chance", "Portal", "POR");
  }
}

module.exports = LastChance;
