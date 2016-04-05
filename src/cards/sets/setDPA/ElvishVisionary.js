"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setC14/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor(game) {
    super(game, "Elvish Visionary", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvishVisionary;
