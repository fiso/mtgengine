"use strict";
const Constants = require ("../../../Constants");
const OpportunityBase = require("../setBBD/Opportunity");

class Opportunity extends OpportunityBase {
  constructor (game) {
    super(game, "Opportunity", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Opportunity;
