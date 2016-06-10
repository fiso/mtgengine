"use strict";
const Constants = require ("../../../Constants");
const FyndhornElvesBase = require("../setDKM/FyndhornElves");

class FyndhornElves extends FyndhornElvesBase {
  constructor (game) {
    super(game, "Fyndhorn Elves", "From the Vault: Twenty", "V13");
  }
}

module.exports = FyndhornElves;
