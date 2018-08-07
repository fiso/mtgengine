"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBBD/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Seventh Edition", "7ED");
  }
}

module.exports = Opportunity;
