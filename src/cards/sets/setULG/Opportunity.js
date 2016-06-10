"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBRB/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Urza's Legacy", "ULG");
  }
}

module.exports = Opportunity;
