"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerhapsYouveMetMyCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Perhaps You've Met My Cohort", "Promotional Schemes", "PARC");
  }
}

module.exports = PerhapsYouveMetMyCohort;
