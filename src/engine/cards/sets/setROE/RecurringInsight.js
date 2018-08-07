"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecurringInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Recurring Insight", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RecurringInsight;
