"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinRecruiter extends Card {
  constructor(game) {
    super(game, "Goblin Recruiter", "Anthologies", "ATH");
  }
}

module.exports = GoblinRecruiter;
