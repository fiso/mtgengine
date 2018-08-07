"use strict";
const Constants = require ("../../../Constants");
const HearthfireHobgoblinBase = require("../setMM2/HearthfireHobgoblin");

class HearthfireHobgoblin extends HearthfireHobgoblinBase {
  constructor (game) {
    super(game, "Hearthfire Hobgoblin", "Planechase", "HOP");
  }
}

module.exports = HearthfireHobgoblin;
