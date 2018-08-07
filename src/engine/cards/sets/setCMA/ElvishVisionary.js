"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setBBD/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Commander Anthology", "CMA");
  }
}

module.exports = ElvishVisionary;
