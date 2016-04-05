"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setARC/Infest");

class Infest extends InfestBase {
  constructor(game) {
    super(game, "Infest", "Commander 2013 Edition", "C13");
  }
}

module.exports = Infest;
