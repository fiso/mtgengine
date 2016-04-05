"use strict";
const Constants = require ("../../../Constants");
const AcademyResearchersBase = require("../set10E/AcademyResearchers");

class AcademyResearchers extends AcademyResearchersBase {
  constructor(game) {
    super(game, "Academy Researchers", "Urza's Saga", "USG");
  }
}

module.exports = AcademyResearchers;
