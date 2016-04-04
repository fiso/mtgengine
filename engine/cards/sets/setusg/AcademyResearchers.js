"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcademyResearchersBase = require("../set10E/AcademyResearchers.js");

class AcademyResearchers extends AcademyResearchersBase {
  constructor(game) {
    super(game, "Academy Researchers", "Urza's Saga", "USG");
  }
}

module.exports = AcademyResearchers;
