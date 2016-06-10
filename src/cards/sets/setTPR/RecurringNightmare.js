"use strict";
const Constants = require ("../../../Constants");
const RecurringNightmareBase = require("../setEXO/RecurringNightmare");

class RecurringNightmare extends RecurringNightmareBase {
  constructor (game) {
    super(game, "Recurring Nightmare", "Tempest Remastered", "TPR");
  }
}

module.exports = RecurringNightmare;
