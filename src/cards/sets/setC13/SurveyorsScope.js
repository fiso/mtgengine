"use strict";
const Constants = require ("../../../Constants");
const SurveyorsScopeBase = require("../setCMA/SurveyorsScope");

class SurveyorsScope extends SurveyorsScopeBase {
  constructor (game) {
    super(game, "Surveyor's Scope", "Commander 2013", "C13");
  }
}

module.exports = SurveyorsScope;
