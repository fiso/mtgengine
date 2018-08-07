"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Lim-Dûl's Cohort", "Masters Edition IV", "ME4");
  }
}

module.exports = LimDulsCohort;
