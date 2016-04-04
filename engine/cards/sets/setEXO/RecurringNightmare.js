"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecurringNightmare extends Card {
  constructor(game) {
    super(game, "Recurring Nightmare", "Exodus", "EXO");
  }
}

module.exports = RecurringNightmare;
