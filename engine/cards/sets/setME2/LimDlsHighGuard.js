"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LimDlsHighGuardBase = require("../setALL/LimDlsHighGuard.js");

class LimDlsHighGuard extends LimDlsHighGuardBase {
  constructor(game) {
    super(game, "Lim-Dûl's High Guard", "Masters Edition II", "ME2");
  }
}

module.exports = LimDlsHighGuard;
