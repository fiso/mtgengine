"use strict";
const Constants = require ("../../../Constants");
const LimDulsHighGuardBase = require("../setME2/LimDulsHighGuard");

class LimDulsHighGuard extends LimDulsHighGuardBase {
  constructor (game) {
    super(game, "Lim-Dûl's High Guard", "Alliances", "ALL");
  }
}

module.exports = LimDulsHighGuard;
