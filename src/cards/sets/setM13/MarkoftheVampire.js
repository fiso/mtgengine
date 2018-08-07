"use strict";
const Constants = require ("../../../Constants");
const MarkoftheVampireBase = require("../setXLN/MarkoftheVampire");

class MarkoftheVampire extends MarkoftheVampireBase {
  constructor (game) {
    super(game, "Mark of the Vampire", "Magic 2013", "M13");
  }
}

module.exports = MarkoftheVampire;
