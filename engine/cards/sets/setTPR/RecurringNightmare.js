"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecurringNightmareBase = require("../setEXO/RecurringNightmare.js");

class RecurringNightmare extends RecurringNightmareBase {
  constructor(game) {
    super(game, "Recurring Nightmare", "Tempest Remastered", "TPR");
  }
}

module.exports = RecurringNightmare;
