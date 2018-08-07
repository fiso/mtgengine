"use strict";
const Constants = require ("../../../Constants");
const SkyshroudVampireBase = require("../setTPR/SkyshroudVampire");

class SkyshroudVampire extends SkyshroudVampireBase {
  constructor (game) {
    super(game, "Skyshroud Vampire", "Tempest", "TMP");
  }
}

module.exports = SkyshroudVampire;
