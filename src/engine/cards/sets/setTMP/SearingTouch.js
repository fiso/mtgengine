"use strict";
const Constants = require ("../../../Constants");
const SearingTouchBase = require("../setTPR/SearingTouch");

class SearingTouch extends SearingTouchBase {
  constructor (game) {
    super(game, "Searing Touch", "Tempest", "TMP");
  }
}

module.exports = SearingTouch;
