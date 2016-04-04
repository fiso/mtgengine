"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HearthfireHobgoblinBase = require("../setEVE/HearthfireHobgoblin.js");

class HearthfireHobgoblin extends HearthfireHobgoblinBase {
  constructor(game) {
    super(game, "Hearthfire Hobgoblin", "Planechase", "HOP");
  }
}

module.exports = HearthfireHobgoblin;
