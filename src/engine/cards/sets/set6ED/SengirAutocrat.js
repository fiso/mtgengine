"use strict";
const Constants = require ("../../../Constants");
const SengirAutocratBase = require("../setEMA/SengirAutocrat");

class SengirAutocrat extends SengirAutocratBase {
  constructor (game) {
    super(game, "Sengir Autocrat", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SengirAutocrat;
