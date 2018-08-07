"use strict";
const Constants = require ("../../../Constants");
const RecurringNightmareBase = require("../setTPR/RecurringNightmare");

class RecurringNightmare extends RecurringNightmareBase {
  constructor (game) {
    super(game, "Recurring Nightmare", "Exodus", "EXO");
  }
}

module.exports = RecurringNightmare;
