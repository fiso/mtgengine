"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SplittingHeadache extends Card {
  constructor(game) {
    super(game, "Splitting Headache", "Shadowmoor", "SHM");
  }
}

module.exports = SplittingHeadache;
