"use strict";
const Constants = require ("../../../Constants");
const FarseekBase = require("../setC17/Farseek");

class Farseek extends FarseekBase {
  constructor (game) {
    super(game, "Farseek", "Commander 2016", "C16");
  }
}

module.exports = Farseek;
