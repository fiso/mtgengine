"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudTrollBase = require("../setTMP/SkyshroudTroll.js");

class SkyshroudTroll extends SkyshroudTrollBase {
  constructor(game) {
    super(game, "Skyshroud Troll", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudTroll;
