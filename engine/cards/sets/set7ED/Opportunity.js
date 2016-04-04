"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OpportunityBase = require("../setBRB/Opportunity.js");

class Opportunity extends OpportunityBase {
  constructor(game) {
    super(game, "Opportunity", "Seventh Edition", "7ED");
  }
}

module.exports = Opportunity;
