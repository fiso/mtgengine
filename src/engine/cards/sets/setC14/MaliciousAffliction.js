"use strict";
const Constants = require ("../../../Constants");
const MaliciousAfflictionBase = require("../setEMA/MaliciousAffliction");

class MaliciousAffliction extends MaliciousAfflictionBase {
  constructor (game) {
    super(game, "Malicious Affliction", "Commander 2014", "C14");
  }
}

module.exports = MaliciousAffliction;
