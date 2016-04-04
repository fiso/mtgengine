"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudVampireBase = require("../setTMP/SkyshroudVampire.js");

class SkyshroudVampire extends SkyshroudVampireBase {
  constructor(game) {
    super(game, "Skyshroud Vampire", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudVampire;
