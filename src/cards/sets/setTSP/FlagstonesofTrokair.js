"use strict";
const Constants = require ("../../../Constants");
const FlagstonesofTrokairBase = require("../setTD0/FlagstonesofTrokair");

class FlagstonesofTrokair extends FlagstonesofTrokairBase {
  constructor (game) {
    super(game, "Flagstones of Trokair", "Time Spiral", "TSP");
  }
}

module.exports = FlagstonesofTrokair;
