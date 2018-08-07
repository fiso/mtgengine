"use strict";
const Constants = require ("../../../Constants");
const RhysticStudyBase = require("../setPZ1/RhysticStudy");

class RhysticStudy extends RhysticStudyBase {
  constructor (game) {
    super(game, "Rhystic Study", "Commander's Arsenal", "CM1");
  }
}

module.exports = RhysticStudy;
