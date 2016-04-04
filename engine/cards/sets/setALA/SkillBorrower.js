"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkillBorrower extends Card {
  constructor(game) {
    super(game, "Skill Borrower", "Shards of Alara", "ALA");
  }
}

module.exports = SkillBorrower;
