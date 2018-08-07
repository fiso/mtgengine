"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Recruiter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinRecruiter;
