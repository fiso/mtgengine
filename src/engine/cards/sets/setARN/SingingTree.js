"use strict";
const Constants = require ("../../../Constants");
const SingingTreeBase = require("../setMED/SingingTree");

class SingingTree extends SingingTreeBase {
  constructor (game) {
    super(game, "Singing Tree", "Arabian Nights", "ARN");
  }
}

module.exports = SingingTree;
