"use strict";
const Constants = require ("../../../Constants");
const FrostBreathBase = require("../setM14/FrostBreath");

class FrostBreath extends FrostBreathBase {
  constructor (game) {
    super(game, "Frost Breath", "Magic 2012", "M12");
  }
}

module.exports = FrostBreath;
