"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../setW17/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor (game) {
    super(game, "Raise Dead", "Collectors’ Edition", "CED");
  }
}

module.exports = RaiseDead;
