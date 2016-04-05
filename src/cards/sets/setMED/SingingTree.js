"use strict";
const Constants = require ("../../../Constants");
const SingingTreeBase = require("../setARN/SingingTree");

class SingingTree extends SingingTreeBase {
  constructor(game) {
    super(game, "Singing Tree", "Masters Edition", "MED");
  }
}

module.exports = SingingTree;
