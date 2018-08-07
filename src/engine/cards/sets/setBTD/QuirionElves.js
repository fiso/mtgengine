"use strict";
const Constants = require ("../../../Constants");
const QuirionElvesBase = require("../setDDE/QuirionElves");

class QuirionElves extends QuirionElvesBase {
  constructor (game) {
    super(game, "Quirion Elves", "Beatdown Box Set", "BTD");
  }
}

module.exports = QuirionElves;
