"use strict";
const Constants = require ("../../../Constants");
const LimDulsCohortBase = require("../setICE/LimDulsCohort");

class LimDulsCohort extends LimDulsCohortBase {
  constructor(game) {
    super(game, "Lim-Dûl's Cohort", "Masters Edition IV", "ME4");
  }
}

module.exports = LimDulsCohort;
