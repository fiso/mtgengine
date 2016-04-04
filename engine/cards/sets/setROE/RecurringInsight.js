"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecurringInsight extends Card {
  constructor(game) {
    super(game, "Recurring Insight", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RecurringInsight;
