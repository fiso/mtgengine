"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SingingTreeBase = require("../setARN/SingingTree.js");

class SingingTree extends SingingTreeBase {
  constructor(game) {
    super(game, "Singing Tree", "Masters Edition", "MED");
  }
}

module.exports = SingingTree;
