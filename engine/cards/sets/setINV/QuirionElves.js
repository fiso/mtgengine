"use strict";
const Constants = require ("../../../Constants");
const QuirionElvesBase = require("../setBTD/QuirionElves");

class QuirionElves extends QuirionElvesBase {
  constructor(game) {
    super(game, "Quirion Elves", "Invasion", "INV");
  }
}

module.exports = QuirionElves;
