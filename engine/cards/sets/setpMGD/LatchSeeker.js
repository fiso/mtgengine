"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LatchSeekerBase = require("../setAVR/LatchSeeker.js");

class LatchSeeker extends LatchSeekerBase {
  constructor(game) {
    super(game, "Latch Seeker", "Magic Game Day", "pMGD");
  }
}

module.exports = LatchSeeker;
