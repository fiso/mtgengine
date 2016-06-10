"use strict";
const Constants = require ("../../../Constants");
const SeekerofSkybreakBase = require("../setBRB/SeekerofSkybreak");

class SeekerofSkybreak extends SeekerofSkybreakBase {
  constructor (game) {
    super(game, "Seeker of Skybreak", "Seventh Edition", "7ED");
  }
}

module.exports = SeekerofSkybreak;
