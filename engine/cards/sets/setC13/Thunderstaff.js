"use strict";
const Constants = require ("../../../Constants");
const ThunderstaffBase = require("../setARC/Thunderstaff");

class Thunderstaff extends ThunderstaffBase {
  constructor(game) {
    super(game, "Thunderstaff", "Commander 2013 Edition", "C13");
  }
}

module.exports = Thunderstaff;
