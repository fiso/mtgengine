"use strict";
const Constants = require ("../../../Constants");
const StupefyingTouchBase = require("../setEMA/StupefyingTouch");

class StupefyingTouch extends StupefyingTouchBase {
  constructor (game) {
    super(game, "Stupefying Touch", "Torment", "TOR");
  }
}

module.exports = StupefyingTouch;
