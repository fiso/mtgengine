"use strict";
const Constants = require ("../../../Constants");
const QuirionElvesBase = require("../setDDE/QuirionElves");

class QuirionElves extends QuirionElvesBase {
  constructor (game) {
    super(game, "Quirion Elves", "Mirage", "MIR");
  }
}

module.exports = QuirionElves;
