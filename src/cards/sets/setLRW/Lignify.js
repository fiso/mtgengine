"use strict";
const Constants = require ("../../../Constants");
const LignifyBase = require("../setDD3_GVL/Lignify");

class Lignify extends LignifyBase {
  constructor (game) {
    super(game, "Lignify", "Lorwyn", "LRW");
  }
}

module.exports = Lignify;
