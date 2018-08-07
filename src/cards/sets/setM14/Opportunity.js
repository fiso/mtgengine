"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBBD/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Magic 2014", "M14");
  }
}

module.exports = Opportunity;
