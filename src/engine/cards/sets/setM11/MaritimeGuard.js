"use strict";
const Constants = require ("../../../Constants");
const MaritimeGuardBase = require("../setORI/MaritimeGuard");

class MaritimeGuard extends MaritimeGuardBase {
  constructor (game) {
    super(game, "Maritime Guard", "Magic 2011", "M11");
  }
}

module.exports = MaritimeGuard;
