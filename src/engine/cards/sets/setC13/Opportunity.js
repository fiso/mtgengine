"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBBD/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Commander 2013", "C13");
  }
}

module.exports = Opportunity;
