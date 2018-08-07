"use strict";
const Constants = require ("../../../Constants");
const SummaryDismissalBase = require("../setEMN/SummaryDismissal");

class SummaryDismissal extends SummaryDismissalBase {
  constructor (game) {
    super(game, "Summary Dismissal", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SummaryDismissal;
