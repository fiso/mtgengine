"use strict";
const Constants = require ("../../../Constants");
const FamiliarGroundBase = require("../set7ED/FamiliarGround");

class FamiliarGround extends FamiliarGroundBase {
  constructor (game) {
    super(game, "Familiar Ground", "Weatherlight", "WTH");
  }
}

module.exports = FamiliarGround;
