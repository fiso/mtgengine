"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LimDlsCohortBase = require("../setICE/LimDlsCohort.js");

class LimDlsCohort extends LimDlsCohortBase {
  constructor(game) {
    super(game, "Lim-Dûl's Cohort", "Masters Edition IV", "ME4");
  }
}

module.exports = LimDlsCohort;
