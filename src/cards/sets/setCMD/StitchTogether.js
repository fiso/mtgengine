"use strict";
const Constants = require ("../../../Constants");
const StitchTogetherBase = require("../setJUD/StitchTogether");

class StitchTogether extends StitchTogetherBase {
  constructor(game) {
    super(game, "Stitch Together", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = StitchTogether;
