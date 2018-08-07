"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setBBD/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Magic 2010", "M10");
  }
}

module.exports = ElvishVisionary;
