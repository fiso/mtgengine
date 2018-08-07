"use strict";
const Constants = require ("../../../Constants");
const StitchTogetherBase = require("../setC18/StitchTogether");

class StitchTogether extends StitchTogetherBase {
  constructor (game) {
    super(game, "Stitch Together", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = StitchTogether;
