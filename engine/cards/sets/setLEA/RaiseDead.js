"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RaiseDeadBase = require("../set6ED/RaiseDead.js");

class RaiseDead extends RaiseDeadBase {
  constructor(game) {
    super(game, "Raise Dead", "Limited Edition Alpha", "LEA");
  }
}

module.exports = RaiseDead;
