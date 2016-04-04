"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessCohort extends Card {
  constructor(game) {
    super(game, "Reckless Cohort", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RecklessCohort;
