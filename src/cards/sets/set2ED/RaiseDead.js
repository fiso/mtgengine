"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../set6ED/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor (game) {
    super(game, "Raise Dead", "Unlimited Edition", "2ED");
  }
}

module.exports = RaiseDead;
