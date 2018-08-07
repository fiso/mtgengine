"use strict";
const Constants = require ("../../../Constants");
const StitchTogetherBase = require("../setC18/StitchTogether");

class StitchTogether extends StitchTogetherBase {
  constructor (game) {
    super(game, "Stitch Together", "Commander 2011", "CMD");
  }
}

module.exports = StitchTogether;
