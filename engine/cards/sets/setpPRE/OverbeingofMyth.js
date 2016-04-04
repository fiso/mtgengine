"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverbeingofMythBase = require("../setEVE/OverbeingofMyth.js");

class OverbeingofMyth extends OverbeingofMythBase {
  constructor(game) {
    super(game, "Overbeing of Myth", "Prerelease Events", "pPRE");
  }
}

module.exports = OverbeingofMyth;
