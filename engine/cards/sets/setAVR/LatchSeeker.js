"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LatchSeeker extends Card {
  constructor(game) {
    super(game, "Latch Seeker", "Avacyn Restored", "AVR");
  }
}

module.exports = LatchSeeker;
