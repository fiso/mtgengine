"use strict";
const Constants = require ("../../../Constants");
const FyndhornElvesBase = require("../setVMA/FyndhornElves");

class FyndhornElves extends FyndhornElvesBase {
  constructor (game) {
    super(game, "Fyndhorn Elves", "World Championship Decks 1997", "WC97");
  }
}

module.exports = FyndhornElves;
