"use strict";
const Constants = require ("../../../Constants");
const StitchersGraftBase = require("../setEMN/StitchersGraft");

class StitchersGraft extends StitchersGraftBase {
  constructor (game) {
    super(game, "Stitcher's Graft", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = StitchersGraft;
