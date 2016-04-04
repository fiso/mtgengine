"use strict";
const Constants = require ("../../../Constants");
const LimDlsHighGuardBase = require("../setALL/LimDlsHighGuard");

class LimDlsHighGuard extends LimDlsHighGuardBase {
  constructor(game) {
    super(game, "Lim-Dûl's High Guard", "Deckmasters", "DKM");
  }
}

module.exports = LimDlsHighGuard;
