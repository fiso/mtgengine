"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadAstray extends UnimplementedCard {
  constructor (game) {
    super(game, "Lead Astray", "Judgment", "JUD");
  }
}

module.exports = LeadAstray;
