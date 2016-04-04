"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeadGolem extends Card {
  constructor(game) {
    super(game, "Lead Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LeadGolem;
