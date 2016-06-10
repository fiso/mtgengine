"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurveytheWreckage extends UnimplementedCard {
  constructor (game) {
    super(game, "Survey the Wreckage", "Return to Ravnica", "RTR");
  }
}

module.exports = SurveytheWreckage;
