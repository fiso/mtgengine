"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariMonkBase = require("../setTMP/SoltariMonk.js");

class SoltariMonk extends SoltariMonkBase {
  constructor(game) {
    super(game, "Soltari Monk", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariMonk;
