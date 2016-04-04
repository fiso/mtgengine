"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRecruiterBase = require("../setATH/GoblinRecruiter.js");

class GoblinRecruiter extends GoblinRecruiterBase {
  constructor(game) {
    super(game, "Goblin Recruiter", "Visions", "VIS");
  }
}

module.exports = GoblinRecruiter;
