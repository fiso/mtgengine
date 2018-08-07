"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecurringNightmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Recurring Nightmare", "Tempest Remastered", "TPR");
  }
}

module.exports = RecurringNightmare;
