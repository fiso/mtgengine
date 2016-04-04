"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaliciousAffliction extends Card {
  constructor(game) {
    super(game, "Malicious Affliction", "Commander 2014", "C14");
  }
}

module.exports = MaliciousAffliction;
