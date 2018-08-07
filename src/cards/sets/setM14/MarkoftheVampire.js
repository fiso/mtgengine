"use strict";
const Constants = require ("../../../Constants");
const MarkoftheVampireBase = require("../setXLN/MarkoftheVampire");

class MarkoftheVampire extends MarkoftheVampireBase {
  constructor (game) {
    super(game, "Mark of the Vampire", "Magic 2014", "M14");
  }
}

module.exports = MarkoftheVampire;
