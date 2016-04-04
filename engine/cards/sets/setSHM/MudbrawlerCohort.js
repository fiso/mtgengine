"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MudbrawlerCohort extends Card {
  constructor(game) {
    super(game, "Mudbrawler Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = MudbrawlerCohort;
