"use strict";
const Constants = require ("../../../Constants");
const SearingTouchBase = require("../setTMP/SearingTouch");

class SearingTouch extends SearingTouchBase {
  constructor (game) {
    super(game, "Searing Touch", "Tempest Remastered", "TPR");
  }
}

module.exports = SearingTouch;
