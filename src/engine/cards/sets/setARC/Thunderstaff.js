"use strict";
const Constants = require ("../../../Constants");
const ThunderstaffBase = require("../setCMA/Thunderstaff");

class Thunderstaff extends ThunderstaffBase {
  constructor (game) {
    super(game, "Thunderstaff", "Archenemy", "ARC");
  }
}

module.exports = Thunderstaff;
