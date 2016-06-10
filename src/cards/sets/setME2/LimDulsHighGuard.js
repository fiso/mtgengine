"use strict";
const Constants = require ("../../../Constants");
const LimDulsHighGuardBase = require("../setALL/LimDulsHighGuard");

class LimDulsHighGuard extends LimDulsHighGuardBase {
  constructor (game) {
    super(game, "Lim-Dûl's High Guard", "Masters Edition II", "ME2");
  }
}

module.exports = LimDulsHighGuard;
