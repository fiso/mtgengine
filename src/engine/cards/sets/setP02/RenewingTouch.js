"use strict";
const Constants = require ("../../../Constants");
const RenewingTouchBase = require("../setS99/RenewingTouch");

class RenewingTouch extends RenewingTouchBase {
  constructor (game) {
    super(game, "Renewing Touch", "Portal Second Age", "P02");
  }
}

module.exports = RenewingTouch;
