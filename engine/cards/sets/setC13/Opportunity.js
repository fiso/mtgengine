"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OpportunityBase = require("../setBRB/Opportunity.js");

class Opportunity extends OpportunityBase {
  constructor(game) {
    super(game, "Opportunity", "Commander 2013 Edition", "C13");
  }
}

module.exports = Opportunity;
