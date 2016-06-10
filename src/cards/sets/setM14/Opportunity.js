"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBRB/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Opportunity;
