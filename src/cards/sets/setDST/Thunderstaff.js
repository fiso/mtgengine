"use strict";
const Constants = require ("../../../Constants");
const ThunderstaffBase = require("../setARC/Thunderstaff");

class Thunderstaff extends ThunderstaffBase {
  constructor(game) {
    super(game, "Thunderstaff", "Darksteel", "DST");
  }
}

module.exports = Thunderstaff;
