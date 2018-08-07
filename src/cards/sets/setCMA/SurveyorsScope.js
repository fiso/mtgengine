"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurveyorsScope extends UnimplementedCard {
  constructor (game) {
    super(game, "Surveyor's Scope", "Commander Anthology", "CMA");
  }
}

module.exports = SurveyorsScope;
