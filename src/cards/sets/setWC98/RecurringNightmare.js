"use strict";
const Constants = require ("../../../Constants");
const RecurringNightmareBase = require("../setTPR/RecurringNightmare");

class RecurringNightmare extends RecurringNightmareBase {
  constructor (game) {
    super(game, "Recurring Nightmare", "World Championship Decks 1998", "WC98");
  }
}

module.exports = RecurringNightmare;
