"use strict";
const Constants = require ("../../../Constants");
const FarseekBase = require("../setC17/Farseek");

class Farseek extends FarseekBase {
  constructor (game) {
    super(game, "Farseek", "Friday Night Magic 2013", "F13");
  }
}

module.exports = Farseek;
