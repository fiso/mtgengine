"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../set6ED/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor (game) {
    super(game, "Raise Dead", "Fifth Edition", "5ED");
  }
}

module.exports = RaiseDead;
