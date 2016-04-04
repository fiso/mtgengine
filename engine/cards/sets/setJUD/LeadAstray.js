"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeadAstray extends Card {
  constructor(game) {
    super(game, "Lead Astray", "Judgment", "JUD");
  }
}

module.exports = LeadAstray;
