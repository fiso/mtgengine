"use strict";
const Constants = require ("../../../Constants");
const SengirAutocratBase = require("../set6ED/SengirAutocrat");

class SengirAutocrat extends SengirAutocratBase {
  constructor (game) {
    super(game, "Sengir Autocrat", "Fifth Edition", "5ED");
  }
}

module.exports = SengirAutocrat;
