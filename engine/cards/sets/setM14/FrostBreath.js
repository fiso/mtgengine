"use strict";
const Constants = require ("../../../Constants");
const FrostBreathBase = require("../setM12/FrostBreath");

class FrostBreath extends FrostBreathBase {
  constructor(game) {
    super(game, "Frost Breath", "Magic 2014 Core Set", "M14");
  }
}

module.exports = FrostBreath;
