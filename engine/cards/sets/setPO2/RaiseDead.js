"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../set6ED/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor(game) {
    super(game, "Raise Dead", "Portal Second Age", "PO2");
  }
}

module.exports = RaiseDead;
