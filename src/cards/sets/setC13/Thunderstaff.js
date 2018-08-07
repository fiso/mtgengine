"use strict";
const Constants = require ("../../../Constants");
const ThunderstaffBase = require("../setCMA/Thunderstaff");

class Thunderstaff extends ThunderstaffBase {
  constructor (game) {
    super(game, "Thunderstaff", "Commander 2013", "C13");
  }
}

module.exports = Thunderstaff;
