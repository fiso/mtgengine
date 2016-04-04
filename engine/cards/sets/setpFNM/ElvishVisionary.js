"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishVisionaryBase = require("../setC14/ElvishVisionary.js");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor(game) {
    super(game, "Elvish Visionary", "Friday Night Magic", "pFNM");
  }
}

module.exports = ElvishVisionary;
