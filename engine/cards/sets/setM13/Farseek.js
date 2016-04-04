"use strict";
const Constants = require ("../../../Constants");
const FarseekBase = require("../setpFNM/Farseek");

class Farseek extends FarseekBase {
  constructor(game) {
    super(game, "Farseek", "Magic 2013", "M13");
  }
}

module.exports = Farseek;
