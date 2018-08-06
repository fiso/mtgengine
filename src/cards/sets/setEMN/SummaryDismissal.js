"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummaryDismissal extends UnimplementedCard {
  constructor (game) {
    super(game, "Summary Dismissal", "Eldritch Moon", "EMN");
  }
}

module.exports = SummaryDismissal;
