"use strict";
const Constants = require ("../../../Constants");
const RecurringNightmareBase = require("../setEXO/RecurringNightmare");

class RecurringNightmare extends RecurringNightmareBase {
  constructor (game) {
    super(game, "Recurring Nightmare", "Vintage Masters", "VMA");
  }
}

module.exports = RecurringNightmare;
