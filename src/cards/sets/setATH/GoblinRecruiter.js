"use strict";
const Constants = require ("../../../Constants");
const GoblinRecruiterBase = require("../set6ED/GoblinRecruiter");

class GoblinRecruiter extends GoblinRecruiterBase {
  constructor (game) {
    super(game, "Goblin Recruiter", "Anthologies", "ATH");
  }
}

module.exports = GoblinRecruiter;
