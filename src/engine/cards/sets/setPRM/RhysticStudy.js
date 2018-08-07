"use strict";
const Constants = require ("../../../Constants");
const RhysticStudyBase = require("../setPZ1/RhysticStudy");

class RhysticStudy extends RhysticStudyBase {
  constructor (game) {
    super(game, "Rhystic Study", "Magic Online Promos", "PRM");
  }
}

module.exports = RhysticStudy;
