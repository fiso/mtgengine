"use strict";
const Constants = require ("../../../Constants");
const StormSeekerBase = require("../setMED/StormSeeker");

class StormSeeker extends StormSeekerBase {
  constructor (game) {
    super(game, "Storm Seeker", "Legends", "LEG");
  }
}

module.exports = StormSeeker;
