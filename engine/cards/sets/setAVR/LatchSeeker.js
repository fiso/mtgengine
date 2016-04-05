"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LatchSeeker extends UnimplementedCard {
  constructor(game) {
    super(game, "Latch Seeker", "Avacyn Restored", "AVR");
  }
}

module.exports = LatchSeeker;
