"use strict";
const Constants = require ("../../../Constants");
const SkyshroudVampireBase = require("../setTMP/SkyshroudVampire");

class SkyshroudVampire extends SkyshroudVampireBase {
  constructor(game) {
    super(game, "Skyshroud Vampire", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudVampire;
