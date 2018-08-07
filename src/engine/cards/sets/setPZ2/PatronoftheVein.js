"use strict";
const Constants = require ("../../../Constants");
const PatronoftheVeinBase = require("../setC17/PatronoftheVein");

class PatronoftheVein extends PatronoftheVeinBase {
  constructor (game) {
    super(game, "Patron of the Vein", "You Make the Cube", "PZ2");
  }
}

module.exports = PatronoftheVein;
