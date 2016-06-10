"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Lim-Dûl's Cohort", "Ice Age", "ICE");
  }
}

module.exports = LimDulsCohort;
