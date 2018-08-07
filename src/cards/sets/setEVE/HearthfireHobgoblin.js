"use strict";
const Constants = require ("../../../Constants");
const HearthfireHobgoblinBase = require("../setMM2/HearthfireHobgoblin");

class HearthfireHobgoblin extends HearthfireHobgoblinBase {
  constructor (game) {
    super(game, "Hearthfire Hobgoblin", "Eventide", "EVE");
  }
}

module.exports = HearthfireHobgoblin;
