"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormSeekerBase = require("../setCHR/StormSeeker.js");

class StormSeeker extends StormSeekerBase {
  constructor(game) {
    super(game, "Storm Seeker", "Legends", "LEG");
  }
}

module.exports = StormSeeker;
