"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setBBD/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Friday Night Magic 2010", "F10");
  }
}

module.exports = ElvishVisionary;
