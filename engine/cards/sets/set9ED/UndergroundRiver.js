"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndergroundRiverBase = require("../set6ED/UndergroundRiver.js");

class UndergroundRiver extends UndergroundRiverBase {
  constructor(game) {
    super(game, "Underground River", "Ninth Edition", "9ED");
  }
}

module.exports = UndergroundRiver;
