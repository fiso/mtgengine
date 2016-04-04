"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StitchTogetherBase = require("../setJUD/StitchTogether.js");

class StitchTogether extends StitchTogetherBase {
  constructor(game) {
    super(game, "Stitch Together", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = StitchTogether;
