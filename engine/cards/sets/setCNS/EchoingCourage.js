"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EchoingCourageBase = require("../setDST/EchoingCourage.js");

class EchoingCourage extends EchoingCourageBase {
  constructor(game) {
    super(game, "Echoing Courage", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = EchoingCourage;
