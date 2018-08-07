"use strict";
const Constants = require ("../../../Constants");
const MidnightGuardBase = require("../setBBD/MidnightGuard");

class MidnightGuard extends MidnightGuardBase {
  constructor (game) {
    super(game, "Midnight Guard", "Magic 2015", "M15");
  }
}

module.exports = MidnightGuard;
