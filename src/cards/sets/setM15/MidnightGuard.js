"use strict";
const Constants = require ("../../../Constants");
const MidnightGuardBase = require("../setDKA/MidnightGuard");

class MidnightGuard extends MidnightGuardBase {
  constructor (game) {
    super(game, "Midnight Guard", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MidnightGuard;
