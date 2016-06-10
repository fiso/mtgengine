"use strict";
const Constants = require ("../../../Constants");
const FlaringFlameKinBase = require("../setDIS/FlaringFlameKin");

class FlaringFlameKin extends FlaringFlameKinBase {
  constructor (game) {
    super(game, "Flaring Flame-Kin", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = FlaringFlameKin;
