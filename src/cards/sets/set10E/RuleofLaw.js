"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuleofLaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Rule of Law", "Tenth Edition", "10E");
  }
}

module.exports = RuleofLaw;
