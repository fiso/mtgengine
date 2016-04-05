"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MudbrawlerCohort extends UnimplementedCard {
  constructor(game) {
    super(game, "Mudbrawler Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = MudbrawlerCohort;
