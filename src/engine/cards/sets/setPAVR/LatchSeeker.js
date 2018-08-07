"use strict";
const Constants = require ("../../../Constants");
const LatchSeekerBase = require("../setAVR/LatchSeeker");

class LatchSeeker extends LatchSeekerBase {
  constructor (game) {
    super(game, "Latch Seeker", "Avacyn Restored Promos", "PAVR");
  }
}

module.exports = LatchSeeker;
