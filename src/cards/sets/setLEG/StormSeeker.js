"use strict";
const Constants = require ("../../../Constants");
const StormSeekerBase = require("../setCHR/StormSeeker");

class StormSeeker extends StormSeekerBase {
  constructor(game) {
    super(game, "Storm Seeker", "Legends", "LEG");
  }
}

module.exports = StormSeeker;
