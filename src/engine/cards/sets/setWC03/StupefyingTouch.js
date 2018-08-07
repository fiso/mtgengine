"use strict";
const Constants = require ("../../../Constants");
const StupefyingTouchBase = require("../setEMA/StupefyingTouch");

class StupefyingTouch extends StupefyingTouchBase {
  constructor (game) {
    super(game, "Stupefying Touch", "World Championship Decks 2003", "WC03");
  }
}

module.exports = StupefyingTouch;
