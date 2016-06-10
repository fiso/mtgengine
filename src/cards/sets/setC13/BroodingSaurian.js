"use strict";
const Constants = require ("../../../Constants");
const BroodingSaurianBase = require("../setCSP/BroodingSaurian");

class BroodingSaurian extends BroodingSaurianBase {
  constructor (game) {
    super(game, "Brooding Saurian", "Commander 2013 Edition", "C13");
  }
}

module.exports = BroodingSaurian;
