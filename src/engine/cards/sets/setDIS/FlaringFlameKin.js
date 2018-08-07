"use strict";
const Constants = require ("../../../Constants");
const FlaringFlameKinBase = require("../setCNS/FlaringFlameKin");

class FlaringFlameKin extends FlaringFlameKinBase {
  constructor (game) {
    super(game, "Flaring Flame-Kin", "Dissension", "DIS");
  }
}

module.exports = FlaringFlameKin;
