"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurveytheWreckage extends Card {
  constructor(game) {
    super(game, "Survey the Wreckage", "Return to Ravnica", "RTR");
  }
}

module.exports = SurveytheWreckage;
