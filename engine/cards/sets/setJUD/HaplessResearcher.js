"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HaplessResearcher extends Card {
  constructor(game) {
    super(game, "Hapless Researcher", "Judgment", "JUD");
  }
}

module.exports = HaplessResearcher;
