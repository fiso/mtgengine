"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../set6ED/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor(game) {
    super(game, "Raise Dead", "Eighth Edition", "8ED");
  }
}

module.exports = RaiseDead;
