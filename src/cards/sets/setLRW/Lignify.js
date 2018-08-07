"use strict";
const Constants = require ("../../../Constants");
const LignifyBase = require("../setGVL/Lignify");

class Lignify extends LignifyBase {
  constructor (game) {
    super(game, "Lignify", "Lorwyn", "LRW");
  }
}

module.exports = Lignify;
