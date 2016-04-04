"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearingTouchBase = require("../setTMP/SearingTouch.js");

class SearingTouch extends SearingTouchBase {
  constructor(game) {
    super(game, "Searing Touch", "Tempest Remastered", "TPR");
  }
}

module.exports = SearingTouch;
