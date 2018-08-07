"use strict";
const Constants = require ("../../../Constants");
const RaiseDeadBase = require("../setW17/RaiseDead");

class RaiseDead extends RaiseDeadBase {
  constructor (game) {
    super(game, "Raise Dead", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RaiseDead;
