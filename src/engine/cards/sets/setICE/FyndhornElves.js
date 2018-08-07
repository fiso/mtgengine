"use strict";
const Constants = require ("../../../Constants");
const FyndhornElvesBase = require("../setVMA/FyndhornElves");

class FyndhornElves extends FyndhornElvesBase {
  constructor (game) {
    super(game, "Fyndhorn Elves", "Ice Age", "ICE");
  }
}

module.exports = FyndhornElves;
