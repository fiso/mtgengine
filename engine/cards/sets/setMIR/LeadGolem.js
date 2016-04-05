"use strict";
const Constants = require ("../../../Constants");
const LeadGolemBase = require("../set6ED/LeadGolem");

class LeadGolem extends LeadGolemBase {
  constructor(game) {
    super(game, "Lead Golem", "Mirage", "MIR");
  }
}

module.exports = LeadGolem;
