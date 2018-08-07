"use strict";
const Constants = require ("../../../Constants");
const BroodingSaurianBase = require("../setC13/BroodingSaurian");

class BroodingSaurian extends BroodingSaurianBase {
  constructor (game) {
    super(game, "Brooding Saurian", "Coldsnap", "CSP");
  }
}

module.exports = BroodingSaurian;
