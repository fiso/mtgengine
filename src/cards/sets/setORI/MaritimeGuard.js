"use strict";
const Constants = require ("../../../Constants");
const MaritimeGuardBase = require("../setM11/MaritimeGuard");

class MaritimeGuard extends MaritimeGuardBase {
  constructor(game) {
    super(game, "Maritime Guard", "Magic Origins", "ORI");
  }
}

module.exports = MaritimeGuard;
