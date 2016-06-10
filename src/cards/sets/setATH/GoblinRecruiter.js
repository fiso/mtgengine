"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Recruiter", "Anthologies", "ATH");
  }
}

module.exports = GoblinRecruiter;
