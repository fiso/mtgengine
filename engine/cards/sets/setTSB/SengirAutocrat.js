"use strict";
const Constants = require ("../../../Constants");
const SengirAutocratBase = require("../set6ED/SengirAutocrat");

class SengirAutocrat extends SengirAutocratBase {
  constructor(game) {
    super(game, "Sengir Autocrat", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SengirAutocrat;
