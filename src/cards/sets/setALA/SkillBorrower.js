"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkillBorrower extends UnimplementedCard {
  constructor (game) {
    super(game, "Skill Borrower", "Shards of Alara", "ALA");
  }
}

module.exports = SkillBorrower;
