"use strict";
const Constants = require ("../../../Constants");
const RhysticStudyBase = require("../setCM1/RhysticStudy");

class RhysticStudy extends RhysticStudyBase {
  constructor (game) {
    super(game, "Rhystic Study", "Prophecy", "PCY");
  }
}

module.exports = RhysticStudy;
