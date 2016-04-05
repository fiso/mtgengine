"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Lead Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LeadGolem;
