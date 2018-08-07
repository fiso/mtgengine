"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../setW17/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor (game) {
    super(game, "Raise Dead", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = RaiseDead;
