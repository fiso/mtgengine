"use strict";
const Constants = require ("../../../Constants");
const MidnightGuardBase = require("../setBBD/MidnightGuard");

class MidnightGuard extends MidnightGuardBase {
  constructor (game) {
    super(game, "Midnight Guard", "Dark Ascension", "DKA");
  }
}

module.exports = MidnightGuard;
