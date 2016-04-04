"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlaringFlameKinBase = require("../setDIS/FlaringFlameKin.js");

class FlaringFlameKin extends FlaringFlameKinBase {
  constructor(game) {
    super(game, "Flaring Flame-Kin", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = FlaringFlameKin;
