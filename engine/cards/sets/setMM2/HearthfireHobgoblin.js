"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HearthfireHobgoblinBase = require("../setEVE/HearthfireHobgoblin.js");

class HearthfireHobgoblin extends HearthfireHobgoblinBase {
  constructor(game) {
    super(game, "Hearthfire Hobgoblin", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HearthfireHobgoblin;
