"use strict";
const Constants = require ("../../../Constants");
const LimDlsCohortBase = require("../setICE/LimDlsCohort");

class LimDlsCohort extends LimDlsCohortBase {
  constructor(game) {
    super(game, "Lim-Dûl's Cohort", "Masters Edition IV", "ME4");
  }
}

module.exports = LimDlsCohort;
