"use strict";
const Constants = require ("../../../Constants");
const EchoingCourageBase = require("../setDST/EchoingCourage");

class EchoingCourage extends EchoingCourageBase {
  constructor (game) {
    super(game, "Echoing Courage", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = EchoingCourage;
