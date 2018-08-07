"use strict";
const Constants = require ("../../../Constants");
const LimDulsCohortBase = require("../setME4/LimDulsCohort");

class LimDulsCohort extends LimDulsCohortBase {
  constructor (game) {
    super(game, "Lim-Dûl's Cohort", "Ice Age", "ICE");
  }
}

module.exports = LimDulsCohort;
