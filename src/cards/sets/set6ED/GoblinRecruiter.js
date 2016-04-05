"use strict";
const Constants = require ("../../../Constants");
const GoblinRecruiterBase = require("../setATH/GoblinRecruiter");

class GoblinRecruiter extends GoblinRecruiterBase {
  constructor(game) {
    super(game, "Goblin Recruiter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinRecruiter;
