"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuidedStrikeBase = require("../setJUD/GuidedStrike.js");

class GuidedStrike extends GuidedStrikeBase {
  constructor(game) {
    super(game, "Guided Strike", "Weatherlight", "WTH");
  }
}

module.exports = GuidedStrike;
