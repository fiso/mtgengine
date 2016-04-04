"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeadGolemBase = require("../set6ED/LeadGolem.js");

class LeadGolem extends LeadGolemBase {
  constructor(game) {
    super(game, "Lead Golem", "Mirage", "MIR");
  }
}

module.exports = LeadGolem;
