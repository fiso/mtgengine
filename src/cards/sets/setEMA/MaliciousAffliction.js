"use strict";
const Constants = require ("../../../Constants");
const MaliciousAfflictionBase = require("../setC14/MaliciousAffliction");

class MaliciousAffliction extends MaliciousAfflictionBase {
  constructor (game) {
    super(game, "Malicious Affliction", "Eternal Masters", "EMA");
  }
}

module.exports = MaliciousAffliction;
