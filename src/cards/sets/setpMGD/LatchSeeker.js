"use strict";
const Constants = require ("../../../Constants");
const LatchSeekerBase = require("../setAVR/LatchSeeker");

class LatchSeeker extends LatchSeekerBase {
  constructor (game) {
    super(game, "Latch Seeker", "Magic Game Day", "pMGD");
  }
}

module.exports = LatchSeeker;
