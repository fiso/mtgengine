"use strict";
const Constants = require ("../../../Constants");
const SyntheticDestinyBase = require("../setPZ1/SyntheticDestiny");

class SyntheticDestiny extends SyntheticDestinyBase {
  constructor (game) {
    super(game, "Synthetic Destiny", "Commander 2015", "C15");
  }
}

module.exports = SyntheticDestiny;
