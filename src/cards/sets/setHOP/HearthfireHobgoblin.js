"use strict";
const Constants = require ("../../../Constants");
const HearthfireHobgoblinBase = require("../setEVE/HearthfireHobgoblin");

class HearthfireHobgoblin extends HearthfireHobgoblinBase {
  constructor (game) {
    super(game, "Hearthfire Hobgoblin", "Planechase", "HOP");
  }
}

module.exports = HearthfireHobgoblin;
