"use strict";
const Constants = require ("../../../Constants");
const PatronoftheNezumiBase = require("../setCM2/PatronoftheNezumi");

class PatronoftheNezumi extends PatronoftheNezumiBase {
  constructor (game) {
    super(game, "Patron of the Nezumi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheNezumi;
