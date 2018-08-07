"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InkmothNexus extends UnimplementedCard {
  constructor (game) {
    super(game, "Inkmoth Nexus", "World Magic Cup Qualifiers", "PWCQ");
  }
}

module.exports = InkmothNexus;
