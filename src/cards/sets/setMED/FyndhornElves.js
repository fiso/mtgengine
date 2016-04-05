"use strict";
const Constants = require ("../../../Constants");
const FyndhornElvesBase = require("../setDKM/FyndhornElves");

class FyndhornElves extends FyndhornElvesBase {
  constructor(game) {
    super(game, "Fyndhorn Elves", "Masters Edition", "MED");
  }
}

module.exports = FyndhornElves;
