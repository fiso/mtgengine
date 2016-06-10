"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Cohort", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RecklessCohort;
