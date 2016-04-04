"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimDlsCohort extends Card {
  constructor(game) {
    super(game, "Lim-Dûl's Cohort", "Ice Age", "ICE");
  }
}

module.exports = LimDlsCohort;
