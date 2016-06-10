"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setC14/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Friday Night Magic", "pFNM");
  }
}

module.exports = ElvishVisionary;
